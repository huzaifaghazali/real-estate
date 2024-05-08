import express from 'express';
import { mongoConnect } from './db/mongo.js';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
