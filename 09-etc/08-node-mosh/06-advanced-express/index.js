import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './middleware/logger.js';
import { auth } from './middleware/authentication.js';
import { router as genresRouter } from './routes/genres.js';
import { router as homeRouter } from './routes/home.js';
console.log(genresRouter);

const app = express();

const PORT = process.env.PORT || 3000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(helmet());

// Conditional middlewares depending on the environment
if (app.get('env') === 'developemnt') {
  app.use(morgan('tiny'));
  app.use(logger);
  app.use(auth);
}

// Routes
app.use(homeRouter);
app.use('/api/genres', genresRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}... `);
});
