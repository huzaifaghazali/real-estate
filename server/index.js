import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { mongoConnect } from './db/mongo.js';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

// Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
