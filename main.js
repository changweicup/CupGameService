import express from './config/myexpress';
import logger from './app/util/logger';
import config from './config/config';

const server = express(); 

server.listenAsync(config.port).then(() => {
    logger.info(`Server started on port ${config.port}.`)
}); 