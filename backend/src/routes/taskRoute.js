import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);
router.put('/', TaskController.update);
router.get('/category/:category', TaskController.getTasksByCategory);
router.post('/delete', TaskController.remove);
router.get('/submitted', TaskController.getTaskHistory);
router.post('/:assignee_id/taskToMe', TaskController.getUserTask);
router.post('/:taskId/submit', TaskController.submitTask);
router.get('/', TaskController.getAllTask);
router.get('/user_id', TaskController.getTaskByMe);
router.post('/category', TaskController.createTaskCategory);
router.post('/category/:category_id', TaskController.deleteTaskCategory);
router.post('/:task_id/assign', TaskController.assign);
router.patch('/:assigned_task_id/reassign', TaskController.reassign);

export default router;
