import express from 'express';
export const router = express.Router();

router.get('/', (req, res) => {
  res.send('genres');
});

router.post('/', (req, res) => {
  res.send('new genre');
});

router.get('/:id', (req, res) => {
  res.send('genre', req.params.id);
});

router.put('/:id', (req, res) => {
  res.send('genre update', req.params.id);
});

router.delete('/:id', (req, res) => {
  res.send('genre deleted');
});
