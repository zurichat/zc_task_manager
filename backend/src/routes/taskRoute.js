import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.post('/:taskId/submit', TaskController.submitTask);

export default router;
