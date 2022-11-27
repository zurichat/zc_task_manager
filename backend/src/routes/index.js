import express from 'express';

import taskRoute from './taskRoute.js';

import pluginRoute from './pluginRoute.js';

const router = express.Router();

router.use('/task', taskRoute);

router.use('/', pluginRoute);

export default router;
