
let config = {};

config.dbHost = process.env.dbHost || 'mongo';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'koa-starter';
config.serverPort = process.env.serverPort || 3000;

export default config;