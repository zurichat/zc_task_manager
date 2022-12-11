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

      const { task_id, ...others } = req.body;
      const result = await taskService.update({ object_id: task_id, ...others });
      console.log(result.data?.data);
      return res.send({ message: 'Task updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    try {
      // Request validation required
      const { task_id, ...others } = req.body;
      const result = await taskService.remove({ object_id: task_id, ...others });
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
        date_submitted: new Date().toISOString(),
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
      const response = await taskService.getAllTasks(organization_id);

      if (!response) {
        return res.send({
          message: 'no result found',
        });
      }
      const data = paginate(response, req.query);

      return res.status(200).send({
        message: 'Tasks returned successfully',
        total_page: data.no_of_pages,
        current_page: data.page,
        page_limit: data.limit,
        data: data.result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCategories(req, res, next) {
    const { organization_id } = req.params;

    try {
      // Request validation required
      const result = await taskService.getAllCategories(organization_id);

      const response = result?.data.data;
      if (!response) {
        return res.send({
          message: 'no result found',
        });
      }

      return res.status(200).send({
        message: 'Categories returned successfully',
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTaskByMe(req, res, next) {
    try {
      const { user_id } = req.params;

      const { org } = req.query;

      // Request validation required
      const result = await taskService.getTaskByMe({ task_creator: user_id, organization_id: org });
      if (!result?.data.data) {
        return res.send({
          message: 'no result found',
        });
      }
      const data = paginate(result?.data.data, req.query);
      return res.status(200).send({
        message: 'Tasks returned successfully',
        total_page: data.no_of_pages,
        current_page: data.page,
        page_limit: data.limit,
        data: data.result,
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
      const task_id = req.params.task_id;

      const result = await taskService.assign({
        ...req.body,
        task_id,
        date_assigned: new Date().toISOString(),
        date_updated: '',
      });

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTasksByCategory(req, res, next) {
    try {
      const { category } = req.params;

      const { org } = req.query;

      const result = await taskService.getTasksByCategory({ task_category: category, organization_id: org });
      return res.send(result.data);
    } catch (error) {
      next(error);
    }
  }

  static async getTaskHistory(req, res, next) {
    try {
      // Request validation required

      const { organization_id } = req.params;
      const result = await taskService.history(organization_id);
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async reassign(req, res, next) {
    try {
      // Request validation required
      const task_id = req.params.assigned_task_id;

      const result = await taskService.reassign({ ...req.body, task_id });
      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }

  static async getAssigneeTask(req, res, next) {
    try {
      const { assignee_id } = req.params;

      const { org } = req.query;

      const result = await taskService.getAssigneeTask({ task_assignee: assignee_id, organization_id: org });

      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTaskCategory(req, res, next) {
    try {
      const { category_id } = req.params;

      const { organization_id } = req.body;
      const result = await taskService.deleteTaskCategory({ object_id: category_id, organization_id });

      res.send(result?.data.data);
    } catch (error) {
      next(error);
    }
  }
}
