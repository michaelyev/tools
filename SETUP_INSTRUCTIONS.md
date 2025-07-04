# Инструкции по настройке

## 1. Переменные окружения

Создайте файл `.env.local` в корне проекта со следующим содержимым:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random
NEXTAUTH_URL=http://localhost:3000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/rent-tool
```

### Генерация секретного ключа

Для генерации безопасного секретного ключа используйте:

```bash
openssl rand -base64 32
```

Или онлайн генератор: https://generate-secret.vercel.app/32

## 2. MongoDB

Убедитесь, что MongoDB запущена и доступна по указанному URI.

### Локальная установка MongoDB

```bash
# macOS (с Homebrew)
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community

# Ubuntu/Debian
sudo apt update
sudo apt install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### MongoDB Atlas (облачная версия)

1. Зарегистрируйтесь на https://cloud.mongodb.com
2. Создайте кластер
3. Получите строку подключения
4. Замените `MONGODB_URI` в `.env.local`

## 3. Запуск приложения

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
npm start
```

## 4. Тестирование

1. Откройте http://localhost:3000/signup
2. Зарегистрируйте нового пользователя
3. Перейдите на http://localhost:3000/test-auth для проверки аутентификации

## 5. Структура базы данных

После регистрации первого пользователя в MongoDB будет создана коллекция `users` со следующей структурой:

```javascript
// Коллекция: users
{
  "_id": ObjectId("..."),
  "name": {
    "firstName": "Иван",
    "lastName": "Петров"
  },
  "email": "ivan@example.com",
  "password": "$2b$12$...", // Зашифрованный пароль
  "createdAt": ISODate("2024-01-15T10:30:00.000Z"),
  "isBusiness": false
}

// Для бизнес-пользователей добавляется поле business
{
  "_id": ObjectId("..."),
  "name": {
    "firstName": "Анна",
    "lastName": "Сидорова"
  },
  "email": "anna@company.com",
  "password": "$2b$12$...",
  "createdAt": ISODate("2024-01-15T10:30:00.000Z"),
  "isBusiness": true,
  "business": {
    "name": "ООО Строительные Инструменты",
    "phone": "+7 (999) 123-45-67",
    "website": "https://stroytools.ru",
    "socialMedia": {
      "facebook": "https://facebook.com/stroytools",
      "instagram": "https://instagram.com/stroytools",
      "linkedin": "",
      "twitter": ""
    },
    "providesServices": true,
    "serviceCategories": ["Строительство", "Ремонт"],
    "description": "Аренда строительных инструментов и оборудования"
  }
}
```

## 6. Безопасность

- Пароли хешируются с помощью bcrypt (12 раундов соли)
- Сессии используют JWT токены
- Время жизни сессии: 30 дней
- Все API endpoints защищены от CSRF атак

## 7. Troubleshooting

### Ошибка подключения к MongoDB
- Проверьте, что MongoDB запущена
- Убедитесь в правильности URI подключения
- Проверьте права доступа к базе данных

### Ошибка NextAuth
- Проверьте переменную `NEXTAUTH_SECRET`
- Убедитесь, что `NEXTAUTH_URL` соответствует вашему домену

### Ошибки TypeScript
- Убедитесь, что все зависимости установлены
- Проверьте импорты в файлах
- Запустите `npm run build` для проверки типов 