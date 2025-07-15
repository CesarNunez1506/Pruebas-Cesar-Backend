import { Request, Response } from "express";
import { serviceGetReturnById } from "../../services/Returns";

export const getReturnById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const returnById = await serviceGetReturnById(parseInt(id));
    res.json(returnById);
};
