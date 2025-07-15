import Returns from "../../models/returns";
import { http } from "../../errors/http";

export const serviceDeleteReturn = async (id: number) => {
    const deletedReturn = await Returns.destroy({ where: { id } });
    if (!deletedReturn) throw new http("No se pudo eliminar la devolucion", 500);
    return { message: "Devolucion eliminada correctamente" };
};
