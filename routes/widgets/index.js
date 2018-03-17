import Router from 'koa-router';
import WidgetsController from '../../controllers/widgets.controller';

const router = new Router({
    prefix: '/widgets'
});

router.get('/', WidgetsController.list);
router.get('/:id', WidgetsController.show);
router.post('/', WidgetsController.create);

export default router;