import HttpRepo from './HttpRepo.js';

class PluginInstallationRepo extends HttpRepo {
  installUrl = `${this.url}organizations/${this.organizationId}/plugins`;

  // `${this.installUrl}/${this.pluginId}`

  async installPluginOnWorkspace(orgUrl, data, bearerToken) {
    return await this.postReq(orgUrl, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }

  async uninstallPluginFromWorkspace(orgUrl, data, bearerToken) {
    return await this.deleteReq(orgUrl, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}

export default new PluginInstallationRepo();
