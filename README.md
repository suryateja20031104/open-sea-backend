# Product API - Backend

This is a simple Express-based backend server that provides a list of products as a REST API. This server is designed to support frontend apps (like React) to display product listings.

## 📁 Project Structure

project/
│
├── index.js # Main Express server file
├── package.json # Project dependencies and scripts

## 🚀 Getting Started

### 1. Install Node.js

Make sure Node.js and npm are installed on your system.
You can check with:
node -v
npm -v

### 2. Install Dependencies

From the project directory, install the required dependencies:
npm install express cors

### 3. Run the Server

Start the backend server with:
node index.js

## 📡 API Endpoint

### `GET /api/products`

Returns a list of products in JSON format.

#### Sample Response:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 59999,
    "image": "https://..."
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 29999,
    "image": "https://..."
  },
  ...
]
```
### 🌐 CORS Enabled

CORS is enabled using the cors package to allow access from frontend applications running on other origins (like React dev server).

### 🛠 Built With
Express – Fast, minimalist web framework for Node.js
CORS – Middleware to handle Cross-Origin Resource Sharing
