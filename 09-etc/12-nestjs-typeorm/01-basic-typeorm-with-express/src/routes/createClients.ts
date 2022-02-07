import { Router, Request, Response } from 'express';
import { Client } from '../entities/Client';
export const router = Router();

router.post('/api/client', async (req: Request, res: Response) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;
  console.log('BODY', req.body);

  const client = Client.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    card_number: cardNumber,
    balance: balance,
  });

  console.log(client);
  try {
    await client.save();
  } catch (error) {
    console.log(error);
  }

  return res.json(client);
});
