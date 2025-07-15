import { Request, Response } from "express";
import { serviceUpdateReturn } from "../../services/Returns";

export const updateReturn = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedReturn = await serviceUpdateReturn(parseInt(id), req.body);
        res.status(200).json(updatedReturn);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
