import Returns from "../../models/returns";

export const serviceGetAllReturns = async () => {
    const allReturns = await Returns.findAll();
    return allReturns;
};
