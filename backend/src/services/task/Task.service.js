import HttpRepo from '../../database/repositories/HttpRepo.js';

class TaskService extends HttpRepo {
  constructor() {
    super();
    this.repo = new HttpRepo();
  }

  async create(params) {
    const create = await this.repo.create(params);

    return create;
  }

  async getUserTask(params) {
    const getUserTask = await this.repo.getUserTask({object_id: params.id});

    return getUserTask;
  }

  async deleteTaskCategory(params) {
    const deleteTask = await this.repo.delete(params);

    return deleteTask;
  }
}

export default new TaskService();
