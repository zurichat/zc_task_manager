import HttpRepo from '../../database/repositories/HttpRepo.js';

import { sub_collections } from '../../utils/collectionNames.js';

class TaskService extends HttpRepo {
  constructor() {
    super();
    this.repo = new HttpRepo();
  }

  async create(params) {
    const { organization_id, ...required } = params;

    const payload = {
      ...required,
      created_at: new Date().toISOString(),
      date_updated: '',
      task_status: 0,
      sub_collection: sub_collections.tasks,
      organization_id,
    };

    const create = await this.repo.create(payload);

    return create;
  }

  async update(params) {
    const { object_id, organization_id, ...required } = params;
    const updatedTask = await this.repo.update({
      object_id,
      organization_id,
      date_updated: new Date().toISOString(),
      sub_collection: sub_collections.tasks,
      ...required,
    });
    return updatedTask;
  }

  async getTasksByCategory(query) {
    const { organization_id, ...filter } = query;
    const result = await this.repo.findWhere(organization_id, {
      ...filter,
      sub_collection: sub_collections.tasks,
    });
    return result;
  }

  async assign(params) {
    const assign = await this.repo.create({ ...params, sub_collection: sub_collections.assigned_tasks });

    return assign;
  }

  async reassign(id, params) {
    const reassign = await this.repo.store({ ...params, object_id: id });

    return reassign;
  }

  async getAllTasks(organizationId) {
    const get = await this.repo.findAll(organizationId, { sub_collection: sub_collections.tasks });
    if (!get) throw new NotFoundError('An error occured while fetching tasks');

    const categories = (await this.getAllCategories(organizationId)).data?.data;

    const taskResult = get.data?.data;

    const tasks = [];

    if (!categories) {
      return taskResult;
    }

    taskResult.forEach((task) => {
      const category = categories.find((cat) => cat._id === task.task_category);

      tasks.push({ ...task, category_name: category?.category_name });
    });

    return tasks;
  }

  async getAllCategories(organizationId) {
    const get = await this.repo.findAll(organizationId, { sub_collection: sub_collections.categories });
    if (!get) throw new NotFoundError('An error occured while fetching categories');

    return get;
  }

  async getTaskByMe(params) {
    const { organization_id, ...filter } = params;
    const get = await this.repo.findWhere(organization_id, filter);
    if (!get) throw new NotFoundError('An error occured while fetching tasks');

    return get;
  }

  async createTaskCategory(params) {
    const { organization_id, ...required } = params;

    const payload = {
      ...required,
      created_at: new Date().toISOString(),
      updated_at: '',
      sub_collection: sub_collections.categories,
      organization_id,
    };
    const create = await this.repo.create(payload);
    return create;
  }

  async remove(params) {
    // const { object_id, organization_id } = params;

    const remove = await this.repo.delete({
      ...params,
      bulk_delete: false,
      filter: { sub_collection: sub_collections.tasks },
    });
    return remove.data;
  }

  async getSubmittedTask() {
    const submitted = await this.repo.findSubmitted();
    return submitted;
  }
  async history(organization_id) {
    const tasks = await this.getAllTasks(organization_id);

    const submittedTasks = await this.repo.findWhere(organization_id, {
      sub_collection: sub_collections.submissions,
    });
    const submissions = submittedTasks?.data?.data;

    const tasksAndSubmissions = [];

    submissions.forEach((sub) => {
      const task = tasks.find((task) => task._id === sub.task_id);

      tasksAndSubmissions.push({
        submission: { ...sub },
        task: { ...task },
      });
    });

    // const history = tasks.filter((task) => {
    //   submitted.some((obj) => {
    //     return task._id === obj.task_id;
    //   });
    // });
    // return history;

    return tasksAndSubmissions;
  }

  async getAssigneeTask(params) {
    const { organization_id, ...filter } = params;

    const tasks = await this.getAllTasks(organization_id);

    const getUserTask = await this.repo.findWhere(organization_id, {
      ...filter,
      sub_collection: sub_collections.assigned_tasks,
    });

    const assignedTask = getUserTask.data?.data;

    const final = [];

    assignedTask.forEach((assg) => {
      const task = tasks.find((task) => task._id === assg.task_id);

      final.push({
        ...assg,
        task,
      });
    });

    return final;
  }

  async deleteTaskCategory(params) {
    const payload = { ...params, bulk_delete: false, filter: { sub_collection: sub_collections.categories } };

    const deleteTask = await this.repo.delete(payload);

    return deleteTask;
  }

  async submitTask(data) {
    const { organization_id, ...required } = data;
    const submission = await this.repo.create({
      organization_id,
      ...required,
      sub_collection: sub_collections.submissions,
    });
    return submission;
  }
}

export default new TaskService();
