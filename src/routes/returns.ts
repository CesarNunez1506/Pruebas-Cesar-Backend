import { Router } from 'express';
import {
  createReturnController,
  deleteReturnController,
  getAllReturnsController,
  getReturnByIdController,
  updateReturnController,
} from '../controllers/Returns';

const router = Router();

router.get('/', getAllReturnsController);
router.get('/:id', getReturnByIdController);
router.post('/', createReturnController);
router.put('/:id', updateReturnController);
router.delete('/:id', deleteReturnController);

export default router;
