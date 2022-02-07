import { Router, Request, Response } from 'express';
import { Client } from '../entities/Client';
import { Transaction, TransactionType } from '../entities/Transaction';
export const router = Router();

router.post(
  '/api/client/:clientId/transaction',
  async (req: Request, res: Response) => {
    const { clientId } = req.params;
    console.log('CLIENTID', clientId);

    const { type, amount } = req.body;

    const client = await Client.findOne(parseInt(clientId));
    console.log('CLIENT', client);

    if (!client) {
      return res.json({
        msg: 'client not found',
      });
    }

    const transaction = Transaction.create({
      amount,
      type,
      client,
    });

    try {
      await transaction.save();

      if (type === TransactionType.DEPOSIT) {
        client.balance = client.balance + transaction.amount;
      }

      if (type === TransactionType.WITHDRAW) {
        client.balance = client.balance - transaction.amount;
      }

      await client.save();
    } catch (error) {
      console.log(error);
    }

    return res.json({
      msg: `Transaction Successful: Client ${client.first_name} ${type}s the amount of: ${amount}`,
    });
  }
);
