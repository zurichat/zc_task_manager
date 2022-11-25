import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.post('/:task_id/assign', TaskController.assign);
router.patch('/:assigned_task_id/reassign', TaskController.reassign);

export default router;
