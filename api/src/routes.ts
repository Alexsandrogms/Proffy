import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const router = express.Router();

router.get('/classes', ClassesController.index);
router.post('/classes', ClassesController.create);
router.get('/teachers', ClassesController.show);

router.get('/connections', ConnectionsController.index);
router.post('/connections', ConnectionsController.create);

export default router;
