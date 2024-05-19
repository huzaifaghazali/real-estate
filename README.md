# Huzaifa Estate

Huzaifa Estate is a full-stack real estate application where users can create accounts and manage house listings. Both users and house listings have full CRUD (Create, Read, Update, Delete) functionality.

## Table of Contents

- [Features](#features)
- [Pictures](#pictures)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

## Features

- User Authentication and Authorization
- Create, Read, Update, and Delete (CRUD) operations for users and house listings
- Real-time updates with Firebase
- Responsive and modern UI with React and Tailwind CSS
- State management with Redux Toolkit

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces
- **React Router**: Declarative routing for React
- **Redux Toolkit**: The official, recommended way to write Redux logic
- **Firebase**: Backend-as-a-Service for real-time database and authentication
- **Tailwind CSS**: A utility-first CSS framework
- **Swiper**: Modern mobile touch slider

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **MongoDB**: NoSQL database for storing user and house listing data
- **Mongoose**: Elegant MongoDB object modeling for Node.js
- **JWT**: JSON Web Tokens for secure user authentication
- **Bcryptjs**: Library for hashing passwords

## Installation

1. **Clone the repository:**
   ```bash
      git clone https://github.com/huzaifaghazali/real-estate.git
      cd huzaifa-estate
   ```
2. **Install dependencies for the frontend:**
   ```bash
      cd client
      npm install
   ```
3. **Install dependencies for the backend:**
   ```bash
      cd sever
      npm install
   ```

## Environment Variables

Create a .env file in the root directory of the backend and add the following environment variables:
 ```bash
   MONGO_URL=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
 ```

 Create a .env file in the root directory of the frontend and add the following environment variables:
  ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_APP_ID=your_firebase_app_id
 ```
 
## Scripts

### Frontend
- Development Server: npm run dev
- Build: npm run build

### Backend
- Development Server: npm run dev
- Start Server: npm start