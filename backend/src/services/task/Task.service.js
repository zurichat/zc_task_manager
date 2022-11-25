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
  async history() {
    const tasks = await this.repo.findAll();
    const history = tasks.map((task) => task.submitted === true);
    return history;
  }
}

export default new TaskService();
