import { NextResponse } from "next/server";
import clientPromise, { createLocationIndexes } from "@lib/mongodb";
import { hashPassword, validateEmail, validatePassword } from "@lib/auth";
import { User } from "@models/User.model";

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
      businessDescription,
      location
    } = body;

    // Валидация обязательных полей
    if (!firstName || !lastName || !email || !password) {
      console.log("Missing required fields:", { firstName, lastName, email, password: !!password });
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
    }

    // Валидация email
    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Валидация пароля
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return NextResponse.json({ 
        error: "Password validation failed", 
        details: passwordValidation.errors 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("rent-tool");

    // Проверяем, существует ли пользователь
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Хешируем пароль
    const hashedPassword = await hashPassword(password);

    // Подготавливаем данные пользователя
    const userData: User = {
      name: {
        firstName,
        lastName
      },
      email,
      password: hashedPassword,
      createdAt: new Date(),
      isBusiness: isBusiness || false,
    };

    // Добавляем данные о местоположении если они есть
    if (location && location.coordinates && location.coordinates.length === 2) {
      userData.location = {
        type: "Point",
        coordinates: location.coordinates
      };
      console.log("Adding location data:", userData.location);
    }

    // Добавляем бизнес-данные если это бизнес
    if (isBusiness) {
      userData.business = {
        name: businessName || "",
        phone: phone || "",
        website: website || "",
        providesServices: providesServices || false,
        serviceCategories: serviceCategories || [],
        description: businessDescription || "",
        socialMedia: socialMedia || {},
      };
    }

    console.log("Saving user data:", { ...userData, password: "[HIDDEN]" });

    // Сохраняем нового пользователя
    const result = await db.collection("users").insertOne(userData);

    // Create location indexes if this is the first user or if location data is present
    if (location && location.coordinates) {
      await createLocationIndexes();
    }

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
