import Returns from "../../models/returns";
import { http } from "../../errors/http";

export const serviceGetReturnById = async (id: number) => {
    const returnById = await Returns.findByPk(id);
    if (!returnById) throw new http("No se encontro la devolucion", 404);
    return returnById;
};
