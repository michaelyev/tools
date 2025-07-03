import { NextResponse } from "next/server";
import clientPromise from "@lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received registration data:", body);

    const {
      firstName,
      lastName,
      email,
      password,
      isBusiness,
      businessName,
      phone,
      website,
      socialMedia,
      providesServices,
      serviceCategories,
      businessDescription
    } = body;

    if (!firstName || !lastName || !email || !password) {
      console.log("Missing required fields:", { firstName, lastName, email, password: !!password });
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("rent-tool");

    // Проверяем, существует ли пользователь
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Подготавливаем данные пользователя
    const userData = {
      name: {
        firstName,
        lastName
      },
      email,
      password,
      createdAt: new Date(),
      isBusiness: isBusiness || false,
    };

    // Добавляем бизнес-данные если это бизнес
    if (isBusiness) {
      userData.business = {
        name: businessName || "",
        phone: phone || "",
        website: website || "",
        socialMedia: socialMedia || {},
        providesServices: providesServices || false,
        serviceCategories: serviceCategories || [],
        description: businessDescription || ""
      };
    }

    console.log("Saving user data:", userData);

    // Сохраняем нового пользователя
    const result = await db.collection("users").insertOne(userData);

    console.log("User registered successfully:", result.insertedId);

    return NextResponse.json({ 
      message: "User registered successfully",
      userId: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
