import { Returns } from '../../models';

export const getAllReturns = async (): Promise<Returns[]> => {
  const returns = await Returns.findAll();
  return returns;
};
