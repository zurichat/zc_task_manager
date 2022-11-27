import pluginRepo from '../../database/repositories/PluginInstallationRepository.js';
import taskService from '../task/Task.service.js';

class PluginInstallationService {
  getPluginInfo() {
    const result = {
      plugin_id: pluginRepo.pluginId,
      name: 'Task Plugin',
      description: "Ease stress in Zuri's task management",
      category: 'Tasks',
      pictures: ['https://img.icons8.com/nolan/512/tasklist.png'],
      icon_url: 'https://img.icons8.com/nolan/512/tasklist.png',
      scaffold_structure: 'Single SPA',
      version: 'v1.0',
      developer_name: 'HNG 9.0/Team Sandpaper',
      developer_email: 'hello@zuri.com',
      sidebar_url: 'https://task.zuri.chat/api/v1/sideBar',
      ping_url: 'https://task.zuri.chat/api/v1/ping',
      homepage_url: 'https://task.zuri.chat/',
      install_url: 'https://task.zuri.chat/',
    };

    return result;
  }

  async sideBarInfo(organisation_id, user_id) {
    const assignedCollection = 'assigned_tasks';

    const taskCollection = 'task';

    const taskUrl = `${taskService.url}/data/read/${taskService.pluginId}/${taskCollection}/${organisation_id}`;

    const response = {
      name: 'Task Plugin',
      description: 'The Task plugin',
      category: 'tasks',
      plugin_id: pluginRepo.pluginId,
      organisation_id: organisation_id,
      user_id: user_id,
      show_group: true,
      createdTasks: [],
      assignedTasks: [],
    };
    // Fetch tasks
    const tasks = (await taskService.getReq(taskUrl)).data.data;

    if (!tasks) {
      return response;
    }

    const tasksAssignToYou = [];
    // pick running games
    const tasksAssignedToYou = tasks.filter((x) => x?.task_creator === user_id);

    const assignUrl = `${taskService.url}/data/read/${taskService.pluginId}/${assignedCollection}/${organisation_id}`;

    const allAssignTasks = (await taskService.getReq(assignUrl)).data.data;

    if (!allAssignTasks) {
      return { ...response, createdTasks: tasksAssignedToYou };
    }

    allAssignTasks.forEach((x) => {
      if (x?.task_assignee === user_id) {
        const task = tasks.find((t) => t._id == x.task_id);

        tasksAssignToYou.push(task);
      }
    });

    return { ...response, createdTasks: tasksAssignedToYou, assignedTasks: tasksAssignToYou };
  }

  async installPlugin(organisation_id, data, bearerToken) {
    const installUrl = `${pluginRepo.url}/organizations/${organisation_id}/plugins`;

    const result = await pluginRepo.installPluginOnWorkspace(installUrl, data, bearerToken);

    return result;
  }

  async uninstallPlugin(organisation_id, data, bearerToken) {
    const installUrl = `${pluginRepo.url}/organizations/${organisation_id}/plugins/${pluginRepo.pluginId}`;

    const result = await pluginRepo.uninstallPluginFromWorkspace(installUrl, data, bearerToken);

    return result;
  }
}

export default new PluginInstallationService();
