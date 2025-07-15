import Returns from "../../models/returns";
import { IReturn } from "../../types/ventas/returns";
import { returnsSchema } from "../../schemas/ventas/returnsSchema";

export const serviceUpdateReturn = async (id: number, data: IReturn) => {
    const validation = returnsSchema.safeParse(data);
    if (!validation.success) {
        throw new Error(validation.error.message);
    }
    const updatedReturn = await Returns.update(validation.data, { where: { id } });
    if (updatedReturn[0] === 0) {
        throw new Error("Return not found");
    }
    return await Returns.findByPk(id);
};
