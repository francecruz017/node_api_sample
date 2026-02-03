# Node Task API

A clean REST API built with **Node.js**, **Express**, and **SQLite**, designed to demonstrate real‑world backend structure and authentication patterns.

This project intentionally avoids ORMs and heavy abstractions to show how things work under the hood.

---

## Features

- Layered architecture (controllers → services → repositories → db)
- JWT‑based authentication
- Password hashing with bcrypt
- SQLite persistence (raw SQL)
- Centralized error handling
- Proper HTTP status codes
- ES Modules setup

---

## Tech Stack

- Node.js (v18+)
- Express
- SQLite
- bcrypt
- jsonwebtoken
- dotenv

---

## Requirements

- Node.js v18+
- npm

---

## Installation

Clone the repository:

```bash
git clone https://github.com/francecruz017/node_api_sample.git
cd node_api_sample
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
JWT_SECRET=your_secret_here
```

---

## Run the Server

Start the API:

```bash
node src/server.js
```

Server runs at:

```
http://localhost:3000
```

---

## Authentication

### Register

```
POST /auth/register
```

Body:
```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

### Login

```
POST /auth/login
```

Body:
```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "<jwt_token>"
}
```

Use the token as a Bearer token for protected routes.

---

## Tasks API (Protected)

All task endpoints require:

```
Authorization: Bearer <jwt_token>
```

---

### Create a Task

```
POST /tasks
```

Body:
```json
{
  "title": "Buy groceries"
}
```

---

### Get All Tasks

```
GET /tasks
```

---

### Get Task by ID

```
GET /tasks/:id
```

---

### Mark Task as Completed

```
PATCH /tasks/:id/complete
```

---

### Delete a Task

```
DELETE /tasks/:id
```

Response:
```
204 No Content
```

---

## Project Structure

```
src/
 ├── controllers
 ├── services
 ├── repositories
 ├── middlewares
 ├── routes
 ├── db
 └── server.js
```

---

## Design Notes

- Controllers handle HTTP only
- Services contain business logic
- Repositories handle database access
- JWT authentication is enforced via middleware
- No ORM by design

---

## Purpose

This project is built for:

- Learning backend architecture
- Interview preparation
- Demonstrating clean Node.js API design

It is intentionally simple, explicit, and production‑oriented.
