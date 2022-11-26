import HttpRepo from '../../database/repositories/HttpRepo.js';

class TaskService extends HttpRepo {
  constructor() {
    super();
    this.repo = new HttpRepo();
  }

  async create(params) {
    this.request = { ...this.request, collection_name: 'task' };

    const create = await this.repo.create(params);

    return create;
  }

  async update(params) {
    const {objectId} = params
    const updatedTask = await this.repo.update(objectId, params);
    return updatedTask;
  }

  async getTasksByCategory(category) {
    const result = await this.repo.findWhere({task_category: category});
    return result;
  async assign(id, params) {
    const assign = await this.repo.store(id, params);

    return assign;
  }

  async reassign(id, params) {
    const reassign = await this.repo.store(id, params);

    return reassign;
  }

  async getAllTasks() {
    const get = await this.repo.findAll();
    if (!get) throw new NotFoundError('An error occured while fetching tasks');

    return get;
  }

  async getTaskByMe(params) {
    const get = await this.repo.findWhere(params);
    if (!get) throw new NotFoundError('An error occured while fetching tasks');

    return get;
  }

  async createTaskCategory(params) {
    const create = await this.repo.create(params);
    return create;
  }

  async remove(params) {
    const { objectId } = params;
    const remove = await this.repo.delete(objectId);
    return remove.data;
  }

  async getSubmittedTask() {
    const submitted = await this.repo.findSubmitted();
    return submitted;
  }
  async history() {
    const result = await this.repo.findAll();
    const submitted = await this.getSubmittedTask()?.data;
    const tasks = result?.data;
    const history = tasks.filter((task) => {
      submitted.some((obj) => {
        return task._id === obj.task_id;
      });
    });
    return history;
  }

  async getUserTask(params) {
    const getUserTask = await this.repo.findWhere({task_assignee: params.assignee_id});

    return getUserTask;
  }

  async deleteTaskCategory(params) {
    const deleteTask = await this.repo.delete({object_id: params.category_id});

    return deleteTask;
  }

  async submitTask(data) {
    const collectionName = 'submissions';
    this.request = { ...this.request, collection_name: collectionName };
    const submission = await this.repo.create(data);
    return submission;
  }
}

export default new TaskService();
