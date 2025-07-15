import { Request, Response } from "express";
import { serviceDeleteReturn } from "../../services/Returns";

export const deleteReturn = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedReturn = await serviceDeleteReturn(parseInt(id));
    res.json(deletedReturn);
};
