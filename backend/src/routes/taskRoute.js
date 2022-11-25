import express from 'express';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', TaskController.create);

export default router;
