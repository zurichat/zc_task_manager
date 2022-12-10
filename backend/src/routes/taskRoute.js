import express from 'express';
import TaskController from '../controllers/TaskController.js';
import { createTaskValidator, updateTaskValidator } from '../validators/taskValidator.js';
import { createAssigTaskValidator, updateAssignTaskValidator } from '../validators/assignTaskValidator.js';
import { createCategoryValidator } from '../validators/categoryValidator.js';
import { createSubmissionValidator } from '../validators/submissionValidator.js';

const router = express.Router();

router.post('/', createTaskValidator, TaskController.create);
router.get('/:organization_id', TaskController.getAllTask);
router.get('/:user_id/by_me', TaskController.getTaskByMe);
router.post('/category', createCategoryValidator, TaskController.createTaskCategory);
router.post('/:task_id/assign', createAssigTaskValidator, TaskController.assign);
router.patch('/:assigned_task_id/reassign', updateAssignTaskValidator, TaskController.reassign);
router.put('/', updateTaskValidator, TaskController.update); /**check */
router.get('/category/:category', TaskController.getTasksByCategory);
router.post('/delete', TaskController.remove);
router.get('/submitted/:organization_id', TaskController.getTaskHistory);
router.get('/:assignee_id/taskToMe', TaskController.getAssigneeTask);
router.post('/:taskId/submit', createSubmissionValidator, TaskController.submitTask);
router.post('/category/:category_id', TaskController.deleteTaskCategory);
router.get('/:organization_id/categories', TaskController.getCategories);
router.patch('/:assigned_task_id/reassign', updateAssignTaskValidator, TaskController.reassign);

export default router;
