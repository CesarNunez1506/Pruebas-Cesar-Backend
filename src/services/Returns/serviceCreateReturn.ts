import Returns from "../../models/returns";
import { http } from "../../errors/http";
import { IReturn } from "../../types/ventas/returns";

export const serviceCreateReturn = async (data: IReturn) => {
    const newReturn = await Returns.create(data);
    if (!newReturn) throw new http("No se pudo crear la devolucion", 500);
    return newReturn;
};
