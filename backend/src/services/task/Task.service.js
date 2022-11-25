import HttpRepo from '../../database/repositories/HttpRepo';

export default class TaskService extends HttpRepo {
  constructor() {
    this.repo = new HttpRepo();
  }

  async create(params) {
    const create = await this.repo.create(params);

    return create;
  }
}
