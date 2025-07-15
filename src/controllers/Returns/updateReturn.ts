import { Request, Response } from 'express';
import { returnsSchema } from '../../schemas';
import { updateReturn } from '../../services/Returns';

export const updateReturnController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const { success } = returnsSchema.partial().safeParse(body);
  if (!success) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  const [updatedRows, updatedReturns] = await updateReturn(Number(id), body);
  if (updatedRows === 0) {
    return res.status(404).json({ message: 'Return not found' });
  }
  res.json(updatedReturns[0]);
};
