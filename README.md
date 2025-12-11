# Todo App

A simple RESTful API for managing todos built with Node.js, Express, and MongoDB.

## Features

- Create new todos
- Retrieve all todos
- RESTful API architecture
- MongoDB database integration

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-reload

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Alok0027/TodoApp.git
cd TodoApp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/todoapp
```

## Usage

### Development Mode
Run the app with auto-reload:
```bash
npm run dev
```

### Production Mode
Run the app:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints

#### Create Todo
- **POST** `/createTodo`
- **Body**:
```json
{
  "title": "Todo title",
  "description": "Todo description"
}
```
- **Response**:
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Todo title",
    "description": "Todo description"
  },
  "message": "Entry created successfully"
}
```

#### Get All Todos
- **GET** `/getTodos`
- **Response**:
```json
{
  "success": true,
  "data": [...],
  "message": "Todos fetched successfully"
}
```

## Project Structure

```
todoApp/
├── config/
│   └── database.js       # Database configuration
├── controllers/
│   ├── createTodo.js     # Create todo controller
│   └── getTodo.js        # Get todos controller
├── models/
│   └── Todo.js           # Todo model schema
├── routes/
│   └── todos.js          # API routes
├── .env                  # Environment variables
├── index.js              # Application entry point
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `DATABASE_URL` | MongoDB connection string | - |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

Alok

## Acknowledgments

- Express.js documentation
- Mongoose documentation
- MongoDB documentation
