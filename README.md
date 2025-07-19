# Book Manager Application

A full-stack application for managing books, featuring a Node.js/Express/MongoDB backend and a React/TypeScript/Tailwind CSS frontend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)

## Features

- CRUD operations for books (create, read, update, delete).
- Ratings system with average rating calculation.
- Responsive UI with listing, viewing, editing, and deleting books.
- Confirmation dialogs for destructive actions.
- Add new books via form modal.

## Tech Stack

**Backend**:

- Node.js
- Express
- MongoDB & Mongoose
- TypeScript
- dotenv, cors

**Frontend**:

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- lucide-react & react-icons

## Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- MongoDB instance (local or cloud)

## Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies for backend:

   ```bash
   cd server
   npm install
   ```

3. Install dependencies for frontend:

   ```bash
   cd client
   npm install
   ```

## Configuration

Create `.env` files in each folder:

### Backend (`server/.env`)

```dotenv
MONGO_URI=<your-mongodb-connection-string>
PORT=5555
```

### Frontend (`client/.env`)

```dotenv
VITE_API_URL=http://localhost:5555
```

## Running the App

### Backend

```bash
cd server
npm run dev
```

Server runs on `http://localhost:5555`.

### Frontend

```bash
cd client
npm run dev
```

Frontend runs on `http://localhost:5173` (default Vite port).

## Folder Structure

```
/server
├─ src
│  ├─ controllers
│  ├─ models
│  ├─ routes
│  └─ app.ts
└─ .env

/client
├─ src
│  ├─ Interfaces
│  ├─ components
│  ├─ pages
│  ├─ App.tsx
│  └─ main.tsx
└─ .env
```

## API Endpoints

Base URL: `http://localhost:5555/books`

- `POST /books` – Create a new book.
- `GET /books` – Get all books.
- `GET /books/:id` – Get a book by ID.
- `PUT /books/:id` – Update a book.
- `DELETE /books/:id` – Delete a book.
- `DELETE /books` – Delete all books.
- `POST /books/:id/ratings` – Add a rating to a book.

## Frontend Usage

- Landing page displays all books in a responsive grid.
- **Add Book+** button opens modal to add a new book.
- **Edit**, **Delete**, and **View** buttons on each card.
- Edit and View use the same form layout in a modal.
- Confirmation dialogs for deleting one or all books.
