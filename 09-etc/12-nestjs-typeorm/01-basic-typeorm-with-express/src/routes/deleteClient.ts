import { Router, Request, Response } from 'express';
import { Client } from '../entities/Client';
export const router = Router();

router.delete('/api/client/:clientId', async (req: Request, res: Response) => {
  const { clientId } = req.params;

  try {
    const response = await Client.delete(parseInt(clientId));
    return res.json(response);
  } catch (error) {
    console.log(error);
  }

  return res.json({ msg: 'Client not found' });
});
