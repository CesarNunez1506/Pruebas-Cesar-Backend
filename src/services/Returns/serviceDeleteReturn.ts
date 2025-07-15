import { Returns } from '../../models';

export const deleteReturn = async (id: number): Promise<number> => {
  const deletedRows = await Returns.destroy({
    where: { id },
  });
  return deletedRows;
};
