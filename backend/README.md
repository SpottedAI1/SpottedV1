# Spotted Backend

A Node.js backend server for user authentication (login & registration).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update `.env` file with your MySQL credentials:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=spotted_db
JWT_SECRET=your_secret_key_change_this
NODE_ENV=development
```

3. Initialize the database:
```bash
node initDb.js
```

4. Run the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Register
**POST** `/api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Development

For development with auto-reload:
```bash
npm run dev
```

Make sure you have `nodemon` installed (included in devDependencies).
