import { Request, Response } from "express";
import { serviceGetReturnById } from "../../services/Returns";

export const getReturnById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const returnById = await serviceGetReturnById(parseInt(id));
        res.status(200).json(returnById);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
