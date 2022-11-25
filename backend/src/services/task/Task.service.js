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

  async update(params) {
    const {objectId} = params
    const updatedTask = await this.repo.update(objectId, params);
    return updatedTask;
  }
}

export default new TaskService();
