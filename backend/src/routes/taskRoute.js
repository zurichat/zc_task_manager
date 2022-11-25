import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.post('/:id', TaskController.getUserTask);

export default router;
