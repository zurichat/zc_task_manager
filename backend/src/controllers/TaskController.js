import TaskService from '../services/task/Task.service';

export default class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }
  static async create(req, res, next) {
    try {
      // Request validation required
      const result = await this.taskService.create(req.body);

      res.send({
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }
}
