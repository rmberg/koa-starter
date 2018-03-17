import Router from 'koa-router';
import WidgetsRouter from './widgets';

const router = new Router();
router.use('/api', WidgetsRouter.routes());
export default router;

