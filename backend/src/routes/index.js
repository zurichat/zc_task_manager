import express from 'express';
import serverRoute from './serverRoute.js';
import notificationRoute from './notificationRoute.js';
import taskRoute from './taskRoute.js';

const router = express.Router();

router.use('/server', serverRoute);
router.use('/server', notificationRoute);
router.use('/task', taskRoute);

export default router;
