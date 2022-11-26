import pluginService from '../services/plugin/Plugin.service.js';

export default class PluginController {
  static async getPluginInfo(req, res, next) {
    try {
      // Request validation required
      //   https://api.zuri.chat/organizations/637cb019601ce3fc5dc735c1/plugins
      //   http://localhost:9000/install
      const result = await pluginService.getPluginInfo();
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async installPlugin(req, res, next) {
    try {
      const auth = req?.headers?.authorization;

      const { organization_id, user_id, plugin_id } = req.body;

      if (!auth) {
        return res.status(400).send('Unauthenticated');
      }

      const token = auth.split(' ')[1];

      if (!token) {
        return res.status(400).send('Unauthenticated');
      }

      const result = await pluginService.installPlugin(organization_id, { user_id, plugin_id }, token);

      return res.send(result?.data);
    } catch (error) {
      return next(error);
    }
  }

  static async getSideBarInfo(req, res, next) {
    try {
      const { user, org } = req.query;

      if (!user) {
        return res.status(400).send('No User passed');
      }

      if (!org) {
        return res.status(400).send('No Org passed');
      }

      const result = await pluginService.sideBarInfo(org, user);

      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async uninstallPlugin(req, res, next) {
    try {
      const auth = req?.headers?.authorization;

      const { organizationId, user_id, plugin_id } = req.body;

      if (!auth) {
        return res.status(400).send('Unauthenticated');
      }

      const token = auth.split(' ')[1];

      if (!token) {
        return res.status(400).send('Unauthenticated');
      }

      console.log(token);

      const result = await pluginService.uninstallPlugin(organizationId, { user_id, plugin_id }, token);

      return res.send(result?.data);
    } catch (error) {
      next(error);
    }
  }
}
