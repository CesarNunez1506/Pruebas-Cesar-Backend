import { Request, Response } from 'express';
import { getReturnById } from '../../services/Returns';

export const getReturnByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const returns = await getReturnById(Number(id));
  if (!returns) {
    return res.status(404).json({ message: 'Return not found' });
  }
  res.json(returns);
};
