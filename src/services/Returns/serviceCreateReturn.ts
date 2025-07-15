import Returns from "../../models/returns";
import { IReturn } from "../../types/ventas/returns";
import { returnsSchema } from "../../schemas/ventas/returnsSchema";

export const serviceCreateReturn = async (data: IReturn) => {
    const validation = returnsSchema.safeParse(data);
    if (!validation.success) {
        throw new Error(validation.error.message);
    }
    const newReturn = await Returns.create(validation.data);
    return newReturn;
};
