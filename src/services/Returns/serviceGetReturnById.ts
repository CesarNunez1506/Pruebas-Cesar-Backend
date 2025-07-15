import { Returns } from '../../models';

export const getReturnById = async (id: number): Promise<Returns | null> => {
  const returns = await Returns.findByPk(id);
  return returns;
};
