# Inventory Web App

This web application consists of a **React** frontend, an **Express** backend, and a **MySQL** database. The app is Dockerized for easy deployment, but it can also be run locally without Docker.

## Prerequisites

Before setting up the application, ensure you have the following installed:

- **Git**: To clone the repository.
- **Node.js**: Required to run the React frontend and Express backend locally(if running without Docker).
- **Docker** (optional): For Dockerized setup.
- **MySQL**: For database setup (if running without Docker).

## Clone the Repository:
```bash
git clone https://github.com/zaureqs/wlbs-assignment
```

## 1. Setup without Docker:

### database
checkout init.sql to create the tables and add sample data

### Backend Setup:
- Navigate to the server directory:
```bash
cd server
```
- Install dependencies:
```bash
pnpm install
```

- Create a .env file in the server directory and add credentials (check .env.example for more details):

```bash
PORT=5000
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```
- Run server
```bash
pnpm start
```

### Frontend Setup:
- Navigate to the client directory:
```bash
cd client
```
- Install dependencies:
```bash
pnpm install
```
- Run client app
```bash
pnpm start
```

## Setup with Docker:

### 1. Build and Run:

- Navigate to the server directory:
```bash
cd server
```
- Create a .env
- copy and paste credentials from .env.example

- Navigate to the project's root directory.

- Build and start all services:

```bash
docker-compose up --d
```
## Accessing the Application:

- **Frontend:** Access the frontend application at http://localhost:3000.
- **Backend API:** The backend API is running at http://localhost:5000. You can use tools like Postman to test the API endpoints.

