// import TaskService from '../ser/vices/task/Task.service.js';

import taskService from '../services/task/Task.service.js';

export default class TaskController {
  static async create(req, res, next) {
    try {
      // Request validation required

      const result = await taskService.create(req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async submitTask(req, res, next) {
    try {
      const data = {
        ...req.body,
        task_id: req.params.taskId,
        date_sumitted: new Date().toISOString(),
        date_updated: '',
      };
      console.log(data);
      const result = await taskService.submitTask(data);
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
