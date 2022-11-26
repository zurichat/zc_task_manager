import HttpRepo from '../../database/repositories/HttpRepo.js';

class TaskService extends HttpRepo {
  constructor() {
    super();
    this.repo = new HttpRepo();
  }

  async create(params) {
    const { organization_id, ...required } = params;

    this.request = { ...this.request, collection_name: 'task', organization_id };

    const payload = {
      ...required,
      created_at: new Date().toISOString(),
      updated_at: '',
      task_status: 0,
    };

    const create = await this.repo.create(payload);

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
