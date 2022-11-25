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

  async submitTask(data) {
    const collectionName = 'submissions';

    this.request = { ...this.request, collection_name: collectionName };

    const submission = await this.repo.create(data);

    return submission;
  }
}

export default new TaskService();
