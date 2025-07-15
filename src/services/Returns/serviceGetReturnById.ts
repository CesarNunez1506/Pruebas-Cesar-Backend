import Returns from "../../models/returns";

export const serviceGetReturnById = async (id: number) => {
    const returnById = await Returns.findByPk(id);
    if (!returnById) {
        throw new Error("Return not found");
    }
    return returnById;
};
