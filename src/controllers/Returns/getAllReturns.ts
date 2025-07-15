import { Request, Response } from 'express';
import { getAllReturns } from '../../services/Returns';

export const getAllReturnsController = async (req: Request, res: Response) => {
  const returns = await getAllReturns();
  res.json(returns);
};
