import express, { Request, Response } from 'express';
import { router as loginRouter } from './routes/loginRoutesTest';
import { router as createClientRouter } from './routes/createClients';
import { router as createBankerRouter } from './routes/createBankers';
import { router as createTransactionRouter } from './routes/createTransaction';
import { router as connectBankerToClientRouter } from './routes/connectBankerToClient';
import { router as connectClientToBankerRouter } from './routes/connectClientToBanker';
import { router as deleteClientRouter } from './routes/deleteClient';
import { router as fetchClientRouter } from './routes/fetchClients';

import cookieSession from 'cookie-session';
import cors from 'cors';
import { main } from './dbconfig';

const app = express();
const PORT = process.env.port || 8080;

// Start POSTGRESSDB
main();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['abcde'] }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});

// Routers
app.use(loginRouter);
app.use(createClientRouter);
app.use(createBankerRouter);
app.use(createTransactionRouter);
app.use(connectBankerToClientRouter);
app.use(connectClientToBankerRouter);
app.use(deleteClientRouter);
app.use(fetchClientRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}...`);
});
