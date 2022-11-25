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
}
