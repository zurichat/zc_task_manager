import express from 'express';
import TaskController from '../controllers/TaskController.js';
import { createTaskValidator } from "../validators/taskValidator.js";
import { createAssigTaskValidator, updateAssignTaskValidator } from "../validators/assignTaskValidator.js";
import { createCategoryValidator } from "../validators/categoryValidator.js";

const router = express.Router();

router.post('/', createTaskValidator, TaskController.create);
router.get('/', TaskController.getAllTask);
router.get('/:user_id/by_me', TaskController.getTaskByMe);
router.post('/category', createCategoryValidator, TaskController.createTaskCategory);
router.post('/:task_id/assign', createAssigTaskValidator, TaskController.assign);
router.patch('/:assigned_task_id/reassign', updateAssignTaskValidator, TaskController.reassign);

export default router;
