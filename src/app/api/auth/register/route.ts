import { NextResponse } from "next/server";
import users from "@lib/mockedUsers"; // Массив с моковыми пользователями.

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  // Проверяем, есть ли уже пользователь с таким email
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Добавляем нового пользователя
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    password,
    role: "buyer", // Роль по умолчанию — покупатель
  };

  users.push(newUser); // Сохраняем нового пользователя в массив
  console.log("Registered users:", users);

  return NextResponse.json({ message: "User registered successfully", user: newUser });
}
