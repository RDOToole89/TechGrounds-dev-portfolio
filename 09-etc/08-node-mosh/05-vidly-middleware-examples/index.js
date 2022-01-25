import debug from 'debug';
const startupDebugger = debug('app:startup');
const dbDebugger = debug('app:db');

console.log(debug);

import express from 'express';
import config from 'config';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './middleware/logger.js';
import { auth } from './middleware/authentication.js';
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

const PORT = process.env.PORT || 3000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to server static folders
app.use(express.static('public'));

app.use(cors());
app.use(helmet());

// Configuration
console.log(`Application Name: ${config.get('name')}  `);
console.log(`Mail Server: ${config.get('mail.host')}`);

// This is read from an environment variable
console.log(`Mail Password: ${config.get('mail.password')}`);

if (app.get('env') === 'developemnt') {
  app.use(morgan('tiny'));

  startupDebugger('Morgan enabled...');
  app.use(logger);
  app.use(auth);
}

// db work...
dbDebugger('Connected to the database...');

app.get('/', (req, res) => {
  res.render('index', { title: 'My Express App', message: 'Hello' });
});

app.get('/api/genres', (req, res) => {
  res.send('genres');
});

app.get('/api/genres/:id', (req, res) => {
  res.send('genre', req.params.id);
});

app.put('/api/genres/:id', (req, res) => {
  res.send('genre update', req.params.id);
});

app.post('/api/genres/', (req, res) => {
  res.send('new genre');
});

app.delete('/api/genres/:id', (req, res) => {
  res.send('genre deleted');
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}... `);
});
