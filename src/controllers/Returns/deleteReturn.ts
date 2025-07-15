import { Request, Response } from "express";
import { serviceDeleteReturn } from "../../services/Returns";

export const deleteReturn = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await serviceDeleteReturn(parseInt(id));
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
