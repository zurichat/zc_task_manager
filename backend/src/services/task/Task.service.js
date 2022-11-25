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

  async getAllTasks() {
    const get = await this.repo.findAll();
    if (!get) throw new NotFoundError("An error occured while fetching tasks");

    return get;
  }

  async getTaskByMe(params) {
    const get = await this.repo.findWithFilter(params);
    if (!get) throw new NotFoundError("An error occured while fetching tasks");

    return get;
  }

  async createTaskCategory(params) {
    const create = await this.repo.create(params);

    return create;
  }
}

export default new TaskService();
