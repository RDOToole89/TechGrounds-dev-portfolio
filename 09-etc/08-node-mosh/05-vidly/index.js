import express from 'express';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import { auth } from './middleware/authentication.js';
const app = express();

const PORT = process.env.PORT || 3000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger);
app.use(auth);

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
