import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.put('/', TaskController.update);
router.get('/category/:category', TaskController.getTasksByCategory);

export default router;
