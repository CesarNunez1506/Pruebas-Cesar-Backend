import { Router } from "express";
import {
    createReturn,
    deleteReturn,
    getAllReturns,
    getReturnById,
    updateReturn,
} from "../controllers/Returns";

const router = Router();

router.get("/", getAllReturns);
router.get("/:id", getReturnById);
router.post("/", createReturn);
router.put("/:id", updateReturn);
router.delete("/:id", deleteReturn);

export default router;
