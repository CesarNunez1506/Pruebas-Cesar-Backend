import { Request, Response } from "express";
import { serviceCreateReturn } from "../../services/Returns";

export const createReturn = async (req: Request, res: Response) => {
    try {
        const newReturn = await serviceCreateReturn(req.body);
        res.status(201).json(newReturn);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
