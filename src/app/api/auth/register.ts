import { NextApiRequest, NextApiResponse } from "next";
import users from "@lib/mockedUsers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Проверяем, есть ли уже такой юзер
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Добавляем нового юзера в массив
    const newUser = {
      id: (users.length + 1).toString(),
      name,
      email,
      password,
      role: "buyer", // по умолчанию все - покупатели
    };

    users.push(newUser);
    console.log("Registered users:", users);

    res.status(201).json({ message: "User registered successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
