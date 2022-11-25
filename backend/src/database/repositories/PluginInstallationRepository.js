import HttpRepo from './HttpRepo';

export default class PluginInstallationRepo extends HttpRepo {
  installUrl = `${this.url}organizations/${this.organizationId}/plugins`;

  async installPluginOnWorkspace(data, bearerToken) {
    return await this.postReq(this.installUrl, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }

  async uninstallPluginFromWorkspace(data, bearerToken) {
    return await this.deleteReq(`${this.installUrl}/${this.pluginId}`, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}
