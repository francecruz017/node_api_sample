# Node Task API

A simple REST API built with **Node.js**, **Express**, and **SQLite**.

This project is a small backend example showing:
- CRUD operations
- Clean separation of layers (controllers, services, repositories)
- Proper HTTP status codes
- SQLite persistence

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

## Run the server

Start the API:

```bash
node src/server.js
```

Server will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Create a task
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

### Get all tasks
```
GET /tasks
```

---

### Get task by ID
```
GET /tasks/:id
```

---

### Mark task as completed
```
PATCH /tasks/:id/complete
```

---

### Delete a task
```
DELETE /tasks/:id
```

Returns:
```
204 No Content
```

---

## Notes

- Data is stored in a local SQLite database file
- No authentication
- No ORM (raw SQL)
- Designed for learning and demonstration purposes