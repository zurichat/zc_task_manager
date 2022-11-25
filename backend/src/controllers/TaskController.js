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

  static async getAllTask(req, res, next) {
 

try {
  // Request validation required
  const result = await taskService.getAllTasks();
  const data = new APIFeatures(result, query).paginate();

  return res.send(result?.data,
    {currentPage: `${data[0]}`,
    noOfPages: `${data[2]}`,
    data: `${data[3]}`
  }
);
} catch (error) {
  next(error);
}
}

static async getTaskByMe(req, res, next) {
try {
  const user_id = req.params
  // Request validation required
  const result = await taskService.getTaskByMe({"task_creator": "user_id"});

  res.send({
    ...result,
  });
} catch (error) {
  next(error);
}
}

static async createTaskCategory(req, res, next) {
try {
  // Request validation required
  const result = await taskService.createTaskCategory(req.body);

  return res.send(result?.data  );
} catch (error) {
  next(error);
}
}
}
