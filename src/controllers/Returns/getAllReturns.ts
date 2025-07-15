import { Request, Response } from "express";
import { serviceGetAllReturns } from "../../services/Returns";

export const getAllReturns = async (req: Request, res: Response) => {
    const allReturns = await serviceGetAllReturns();
    res.json(allReturns);
};
