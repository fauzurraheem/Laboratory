import '../config/env';
import express from 'express';


// import error from '../middleware/error';
// import './logger';
import loaders from './loaders';
import routes from './routes';
const {mongoConnect} = require('./mongo');


const server = express();
mongoConnect()
loaders(server, express);
routes(server);

// server.use(error);

export default server;