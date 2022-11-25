import HttpRepo from '../../database/repositories/HttpRepo.js';

class TaskService extends HttpRepo {
  constructor() {
    super();
    this.repo = new HttpRepo();
  }

  async create(params) {
    const create = await this.repo.create(params);

    return create;
  };

  async assign(id, params) {
    const assign = await this.repo.store(id, params);

    return assign;
  }

  async reassign(id, params) {
    const reassign = await this.repo.store(id, params);

    return reassign;
  }
}

export default new TaskService();
