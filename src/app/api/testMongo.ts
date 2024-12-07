import clientPromise from "@lib/mongodb"; // Ваш MongoDB клиент

export default async function handler(req, res) {
  try {
    const client = await clientPromise; // Устанавливаем соединение
    const db = client.db("rent-tool"); // Укажите вашу базу данных

    // Проверяем коллекции в базе данных
    const collections = await db.listCollections().toArray();

    res.status(200).json({
      success: true,
      message: "Успешно подключено к MongoDB",
      collections: collections.map((col) => col.name),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Ошибка подключения к MongoDB",
      error: error.message,
    });
  }
}
