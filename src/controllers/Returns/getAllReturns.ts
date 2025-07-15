import { Request, Response } from "express";
import { serviceGetAllReturns } from "../../services/Returns";

export const getAllReturns = async (req: Request, res: Response) => {
    try {
        const allReturns = await serviceGetAllReturns();
        res.status(200).json(allReturns);
    } catch (error: any) {
        res.status(500).json({ error: "Internal server error" });
    }
};
