import Returns from "../../models/returns";
import { http } from "../../errors/http";
import { IReturn } from "../../types/ventas/returns";

export const serviceUpdateReturn = async (id: number, data: IReturn) => {
    const updatedReturn = await Returns.update(data, { where: { id } });
    if (!updatedReturn) throw new http("No se pudo actualizar la devolucion", 500);
    return await Returns.findByPk(id);
};
