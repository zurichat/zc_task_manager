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

  static async remove(req, res, next) {
    try {
      // Request validation required

      const result = await taskService.remove(req.body);
      console.log(result.data);
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTaskHistory(req, res, next) {
    try {
      // Request validation required
      const result = await taskService.history();
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
