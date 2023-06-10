import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorlogger, logger } from './shared/logger';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function RunServer() {
  try {
    await mongoose.connect(config?.databaseURL as string);
    logger.info('🛢 Database in connected successfully');

    server = app.listen(config?.port, () => {
      logger.info(`UMS listening on port ${config?.port}`);
    });
  } catch (error) {
    errorlogger.error('Failed to connect database❌', error);
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

RunServer();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is recevied');
  if (server) {
    server.close();
  }
});
