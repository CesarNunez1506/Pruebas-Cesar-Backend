import { Returns } from '../../models';
import { ReturnsCreationAttributes } from '../../types';

export const createReturn = async (
  data: ReturnsCreationAttributes
): Promise<Returns> => {
  const newReturn = await Returns.create(data);
  return newReturn;
};
