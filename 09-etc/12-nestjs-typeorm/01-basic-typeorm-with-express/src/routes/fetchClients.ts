import { Router, Request, Response } from 'express';
import { Client } from '../entities/Client';
import { createQueryBuilder } from 'typeorm';

export const router = Router();

router.get('/api/clients', async (req, res) => {
  const { clientId } = req.body;
  console.log(clientId);

  const clients = await createQueryBuilder('client')
    // .select('client')
    // .addSelect("SUM(transaction)", "sum")
    .select('client.first_name')
    .addSelect('client.balance')
    .from(Client, 'client')
    .leftJoinAndSelect('client.transactions', 'transactions')
    // .where('client.id = :clientId', { clientId })
    .where('client.balance >= :balance', { balance: 501 })
    // .where('client.balance >= :minBalance AND client.balance <= :maxBalance', {
    //   minBalance: 501,
    //   maxBalance: 1000,
    // })
    .getMany();
  // .getOne()

  return res.json(clients);
});
