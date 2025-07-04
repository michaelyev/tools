# Настройка аутентификации с NextAuth и bcrypt

## Обзор

Система аутентификации использует:
- **NextAuth.js** для управления сессиями и аутентификацией
- **bcryptjs** для безопасного хеширования паролей
- **MongoDB** для хранения данных пользователей
- **TypeScript** для типизации

## Структура файлов

```
src/
├── app/api/auth/[...nextauth]/route.ts    # NextAuth конфигурация
├── app/api/register/route.ts              # API регистрации
├── lib/auth.ts                            # Утилиты аутентификации
├── models/User.model.ts                   # Модель пользователя
├── types/next-auth.d.ts                   # Типы NextAuth
├── hooks/useAuth.ts                       # Хук для работы с аутентификацией
└── components/ValidationError.tsx         # Компонент ошибок валидации
```

## Установка зависимостей

```bash
npm install next-auth bcryptjs @types/bcryptjs
```

## Переменные окружения

Создайте файл `.env.local`:

```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-connection-string
```

## Формат данных пользователя

### Обычный пользователь
```json
{
  "_id": "ObjectId",
  "name": {
    "firstName": "Иван",
    "lastName": "Петров"
  },
  "email": "ivan@example.com",
  "password": "$2b$12$...",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "isBusiness": false
}
```

### Бизнес-пользователь
```json
{
  "_id": "ObjectId",
  "name": {
    "firstName": "Анна",
    "lastName": "Сидорова"
  },
  "email": "anna@company.com",
  "password": "$2b$12$...",
  "createdAt": "2024-01-15T10:30:00.000Z",
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

## Использование

### В компонентах
```tsx
import { useAuth } from "@hooks/useAuth";

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name.firstName}!</h1>
      {user.isBusiness && (
        <p>Business: {user.business.name}</p>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Защищенные маршруты
```tsx
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  return <div>Protected content</div>;
}
```

## Безопасность

### Пароли
- Используется bcrypt с 12 раундами соли
- Минимальная длина пароля: 6 символов
- Максимальная длина пароля: 128 символов

### Валидация
- Email проверяется на корректность формата
- Пароли хешируются перед сохранением
- Проверка на существующих пользователей

### Сессии
- JWT стратегия
- Время жизни сессии: 30 дней
- Безопасные куки

## API Endpoints

### POST /api/register
Регистрация нового пользователя

**Тело запроса:**
```json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "password": "string",
  "isBusiness": "boolean",
  "businessName": "string (optional)",
  "phone": "string (optional)",
  "website": "string (optional)",
  "socialMedia": "object (optional)",
  "providesServices": "boolean (optional)",
  "serviceCategories": "array (optional)",
  "businessDescription": "string (optional)"
}
```

### POST /api/auth/signin
Вход в систему (через NextAuth)

### POST /api/auth/signout
Выход из системы (через NextAuth)

## Миграция существующих пользователей

Если у вас есть пользователи с незашифрованными паролями, создайте скрипт миграции:

```javascript
import bcrypt from "bcryptjs";
import clientPromise from "@lib/mongodb";

async function migratePasswords() {
  const client = await clientPromise;
  const db = client.db("rent-tool");
  
  const users = await db.collection("users").find({}).toArray();
  
  for (const user of users) {
    if (!user.password.startsWith("$2b$")) {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      await db.collection("users").updateOne(
        { _id: user._id },
        { $set: { password: hashedPassword } }
      );
    }
  }
}
```

## Тестирование

```bash
# Тест регистрации
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "password": "password123"
  }'

# Тест входа (через NextAuth)
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
``` 