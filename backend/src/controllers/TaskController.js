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

  static async update(req, res, next) {
    try {
      // Request validation required
      const result = await taskService.update(req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTasksByCategory(req, res, next) {
    try {
      const {category} = req.params;
      const result = await taskService.getTasksByCategory(category);
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
