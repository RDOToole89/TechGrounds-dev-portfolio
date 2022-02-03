import express, { Request, Response } from 'express';
import { router as loginRouter } from './routes/loginRoutes';

import cookieSession from 'cookie-session';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 3000;

// MiddleWares => code that listens to Request and Response object and
// does some processing on it. The the call completes it calls next()
// The problem with MiddleWare and TypeScript is, is that it adds or
// removes properties from the Res / Res objects. Which is counter-productive
// to what TypeScript is made for. To guarantee structural integrity of data
// with types.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['abcde'] }));
app.use(express.static('public'));
app.use(cors());

// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome');
// });

// Routers
app.use(loginRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}...`);
});
