import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.get('/', TaskController.getAllTask);
router.get('/user_id', TaskController.getTaskByMe);
router.post('/category', TaskController.createTaskCategory);

export default router;
