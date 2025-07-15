import { Request, Response } from "express";
import { serviceCreateReturn } from "../../services/Returns";

export const createReturn = async (req: Request, res: Response) => {
    const newReturn = await serviceCreateReturn(req.body);
    res.json(newReturn);
};
