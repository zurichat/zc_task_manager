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

  async remove(params) {
    const { objectId } = params;
    const remove = await this.repo.delete(objectId);
    return remove;
  }
}

export default new TaskService();
