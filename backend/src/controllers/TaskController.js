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

  static async getUserTask(req, res, next) {
    try{
      const result = await taskService.getUserTask(req.params);

      res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTaskCategory(req, res, next) {
    try{
      const result = await taskService.deleteTaskCategory(req.body);

      res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
