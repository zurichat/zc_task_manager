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
  };

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
    if (!get) throw new NotFoundError("An error occured while fetching tasks");

    return get;
  }

  async getTaskByMe(params) {
    const get = await this.repo.findWhere(params);
    if (!get) throw new NotFoundError("An error occured while fetching tasks");

    return get;
  }

  async createTaskCategory(params) {
    const create = await this.repo.create(params);

    return create;
  }

  async submitTask(data) {
    const collectionName = 'submissions';

    this.request = { ...this.request, collection_name: collectionName };

    const submission = await this.repo.create(data);

    return submission;
  }
}

export default new TaskService();
