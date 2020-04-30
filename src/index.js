// Enviroment variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Global imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from './config/passport';
import dbConfig from './config/database';
import { notFound, catchErrors } from './middlewares/errors';
import "regenerator-runtime/runtime.js";

// Routes
import Items from './routes/items';
import Questions from './routes/questions';
import Auth from './routes/auth';

// DB config
mongoose.connect(dbConfig.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Passport config
passport();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/items', Items());
app.use('/api/questions', Questions());
app.use('/api/auth', Auth());

// Errors handling
app.use(notFound)
app.use(catchErrors);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up!`);
});