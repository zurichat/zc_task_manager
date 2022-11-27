import taskService from '../services/task/Task.service.js';
import { sort, paginate } from '../utils/APIfeatures.js';

export default class TaskController {
  static async create(req, res, next) {
    try {
      // Request validation required

      const result = await taskService.create(req.body);
      return res.send(result.data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      // Request validation required
      const result = await taskService.update(req.body);
         return res.send(result);
    } catch (error) {
      next(error);
    }
  }

    static async remove(req, res, next) {
    try {
      // Request validation required
      const result = await taskService.remove(req.body);
      return res.send(result);
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
      
      const result = await taskService.submitTask(data);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getAllTask(req, res, next) {
    const { organization_id } = req.params;

    try {
            // Request validation required
      const result = await taskService.getAllTasks(organization_id);
      if (!result?.data.data) { 
          return res.send({
              message: "no result found"
          });
      } 
            const data = paginate(result?.data.data, req.query);
            return res.status(200).send({
                message: "Tasks returned successfully",
                total_page: data.no_of_pages,
                current_page: data.page,
                page_limit: data.limit,
                data: data.result
            });
        } catch (error) {
            next(error);
        }
    }

  static async getTaskByMe(req, res, next) {
        try {
            const { user_id } = req.params;

            // Request validation required
            const result = await taskService.getTaskByMe({ task_creator: user_id });
            if (!result?.data.data) { 
                return res.send({
                    message: "no result found"
                });
            }
            const data = paginate(result?.data.data, req.query);
            return res.status(200).send({
                message: "Tasks returned successfully",
                total_page: data.no_of_pages,
                current_page: data.page,
                page_limit: data.limit,
                data: data.result
            });
        } catch (error) {
              next(error);
        }
    }

  static async createTaskCategory(req, res, next) {
        try {
        // Request validation required
            const result = await taskService.createTaskCategory(req.body);

            return res.send(result?.data);
        } catch (error) {
            next(error);
        }
    }

    static async assign(req, res, next) {
    try {
      // Request validation required
      const id = req.params.task_id;

      const result = await taskService.assign(id, req.body);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTasksByCategory(req, res, next) {
    try {
      const {category} = req.params;
      const result = await taskService.getTasksByCategory(category);
         return res.send(result);
    } catch (error) {
      next(error);
    }
  }
  
  static async getTaskHistory(req, res, next) {
    try {
      // Request validation required
      const result = await taskService.history();
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async reassign(req, res, next) {
    try {
      // Request validation required
      const id = req.params.assigned_task_id;

      const result = await taskService.reassign(id, req.body);
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getUserTask(req, res, next) {
    try{
      const result = await taskService.getUserTask(req.params);

      res.send(result?.data.data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTaskCategory(req, res, next) {
    try{
      const result = await taskService.deleteTaskCategory(req.params);

      res.send(result?.data.data);
    } catch (error) {
      next(error);
    }
  }
}
