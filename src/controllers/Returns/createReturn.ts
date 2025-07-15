import { Request, Response } from 'express';
import { returnsSchema } from '../../schemas';
import { createReturn } from '../../services/Returns';

export const createReturnController = async (req: Request, res: Response) => {
  const { body } = req;
  const { success } = returnsSchema.safeParse(body);
  if (!success) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  const newReturn = await createReturn(body);
  res.status(201).json(newReturn);
};
