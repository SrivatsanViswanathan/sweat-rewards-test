import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// Routers
import rewardsRouter from './routers/rewardsRouter.js';

// Public
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

const port = process.env.PORT || 5100;

// Router
app.use('/api/v1/rewards', rewardsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

// Request not found error
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
