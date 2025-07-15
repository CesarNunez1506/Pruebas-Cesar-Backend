import { Request, Response } from "express";
import { serviceUpdateReturn } from "../../services/Returns";

export const updateReturn = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedReturn = await serviceUpdateReturn(parseInt(id), req.body);
    res.json(updatedReturn);
};
