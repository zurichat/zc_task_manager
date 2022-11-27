import express from 'express';
import PluginController from '../controllers/PluginController.js';

const router = express.Router();

router.post('/install', PluginController.installPlugin);
router.post('/uninstall/', PluginController.uninstallPlugin);
router.get('/info', PluginController.getPluginInfo);
router.get('/sidebar', PluginController.getSideBarInfo);

export default router;
