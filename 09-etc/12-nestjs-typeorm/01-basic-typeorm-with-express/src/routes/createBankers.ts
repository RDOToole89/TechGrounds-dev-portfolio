import { Router, Request, Response } from 'express';
import { Banker } from '../entities/Banker';
export const router = Router();

router.post('/api/banker', async (req: Request, res: Response) => {
  const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
  console.log('BODY', req.body);

  const banker = Banker.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    card_number: cardNumber,
    employee_number: employeeNumber,
  });

  try {
    await banker.save();
  } catch (error) {
    console.log(error);
  }

  return res.json(banker);
});
