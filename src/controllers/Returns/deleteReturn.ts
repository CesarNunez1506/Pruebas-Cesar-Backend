import { Request, Response } from 'express';
import { deleteReturn } from '../../services/Returns';

export const deleteReturnController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedRows = await deleteReturn(Number(id));
  if (deletedRows === 0) {
    return res.status(404).json({ message: 'Return not found' });
  }
  res.status(204).send();
};
