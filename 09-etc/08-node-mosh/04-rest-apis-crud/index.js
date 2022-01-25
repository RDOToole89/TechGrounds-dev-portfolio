import Joi from 'joi';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const courses = [
  { id: 0, name: 'course0' },
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

// Simple get request
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Route Parameters (/:id) => for essential or required values
app.get(`/api/courses/:id`, (req, res) => {
  // req.params.id
  const { id } = req.params;

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) return res.status(404).send('The course with the given ID was not found: 404');
  res.send(course);
});

app.get(`/api/posts/:year/:month`, (req, res) => {
  res.send(req.params);
});

// Query Parameter (?sortyBy=name) => optional or extra information
// Example: http://localhost:3000/api/posts/1989/5/22?sortBy=name
app.get(`/api/posts/:year/:month/:day`, (req, res) => {
  res.send(req.query);
});

app.post(`/api/courses`, (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  // console.log(result.error);

  // simple validation => bad request 400 code
  // if (!req.body.name || req.body.name.length < 3)
  //   res.status(400).send(`Name is required and needs at least 3 characters!`);

  if (result.error) return res.status(400).send(result.error.message);

  const { name } = req.body;

  const course = {
    id: courses.length + 1,
    name: name,
  };

  courses.push(course);
  res.status(200).send(course);
});

app.put('/api/courses/:id', (req, res) => {
  console.log('REQ BODY', req.body);

  const { id } = req.params;
  const course = courses.find((course) => course.id === parseInt(id));
  if (!course) return res.status(404).send('404 ERROR: Course not found!');

  const { error } = validateCourse(course);
  console.log(error);

  if (error) {
    res.status(400).send(error.message);
    return;
  }

  course.name = req.body.name;

  res.status(200).send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  console.log('DELETE', req.params);
  const { id } = req.params;
  const course = courses.find((course) => course.id === parseInt(id));
  if (!course) return res.status(404).send('404 ERROR: Course not found!');

  const { error } = validateCourse(course);

  if (error) return res.status(400).send(error.message);

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.status(200).send(course);
});

// PORT
app.listen(`${PORT}`, () => {
  console.log(`APP listening on PORT: ${PORT}`);
});

const validateCourse = (course) => {
  const schema = Joi.object({
    id: Joi.number(),
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(course);
  return result;
};
