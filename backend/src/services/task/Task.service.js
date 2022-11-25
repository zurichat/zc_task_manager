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
    return remove.data;
  }

  async getSubmittedTask() {
    const submitted = await this.repo.findSubmitted();
    return submitted;
  }
  async history() {
    const result = await this.repo.findAll();
    const submitted = await this.getSubmittedTask();
    const tasks = result?.data;
    const history = tasks.filter((task) => task.submitted === true);
    return { history, submitted };
  }
}

export default new TaskService();
