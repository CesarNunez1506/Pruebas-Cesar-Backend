import { Returns } from '../../models';
import { ReturnsAttributes } from '../../types';

export const updateReturn = async (
  id: number,
  data: Partial<ReturnsAttributes>
): Promise<[number, Returns[]]> => {
  const [updatedRows, updatedReturns] = await Returns.update(data, {
    where: { id },
    returning: true,
  });
  return [updatedRows, updatedReturns];
};
