import { Router, Request, Response } from 'express';
import { Client } from '../entities/Client';
import { Banker } from '../entities/Banker';
import { getRepository } from 'typeorm';

export const router = Router();

router.put(
  '/api/banker/:bankerId/client/:clientId',
  async (req: Request, res: Response) => {
    const { bankerId, clientId } = req.params;

    const client = await Client.findOne(parseInt(clientId));

    const bankerRepository = getRepository(Banker);
    const banker = await bankerRepository.findOne(bankerId, {
      relations: ['clients'],
    });

    if (banker && client) {
      banker.clients.push(client);
      await bankerRepository.save(banker);
      return res.json({ msg: 'Client relation added to banker' });
    }

    return res.json({ msg: 'banker or client not found' });
  }
);
