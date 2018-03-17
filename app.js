import Koa from 'koa';
import respond from 'koa-respond';
import bodyParser from 'koa-bodyparser';
import routes from './routes';
import buildDbConnection from './db';

buildDbConnection();

const app = new Koa();

app.use(respond());
app.use(bodyParser());
app.use(routes.routes());
app.listen(3000);