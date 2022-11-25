import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.post('/delete', TaskController.remove);
router.get('/submitted', TaskController.getTaskHistory);

export default router;
