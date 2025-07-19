# Book Store CRUDs

A book store application with basic CRUD functions with a purpose to learn TypeScript.

## Features

- Add a new book.
- View a book's details.
- View all books.
- Update a book's details.
- Delete a book.
- Delete all books at once.

## Prerequisites

- **Node.js**: v18 or later
- **MongoDB**: Atlas or local
- **TypeScript**: Globally install TypeScript for easier startup
- **Postman**: To test your backend without frontend

## Installation

1. Clone the repository.
2. Open two terminals.
3. Navigate to server and client directories.
4. Run `bash npm i` in those terminals to install dependencies.
5. Initialize environmental variables
   - Create .env file in your Server directory's root and set these variables
     ```dotenv
     MONGODB_URI=your_mongodb_connection_string
     PORT=your_port_number
     ```
6. Run ``bash npm run dev`to start the server and client sides.
