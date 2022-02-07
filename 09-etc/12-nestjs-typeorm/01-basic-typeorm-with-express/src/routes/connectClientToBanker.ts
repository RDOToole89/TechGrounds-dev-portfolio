import { getRepository } from 'typeorm';
import { Router, Request, Response } from 'express';
import { Banker } from '../entities/Banker';
import { Client } from '../entities/Client';

export const router = Router();

router.put(
  '/api/client/:clientId/banker/:bankerId',
  async (req: Request, res: Response) => {
    const { bankerId, clientId } = req.params;
    console.log('IDS', bankerId, clientId);

    const banker = await Banker.findOne(parseInt(bankerId));

    const clientRepository = getRepository(Client);
    const client = await clientRepository.findOne(clientId, {
      relations: ['bankers'],
    });

    if (banker && client) {
      client.bankers.push(banker);
      await clientRepository.save(client);
      return res.json({ msg: 'Banker relation added to client' });
    }

    return res.json({ msg: 'banker or client not found' });
  }
);
