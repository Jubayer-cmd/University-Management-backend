import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'

async function RunServer() {
  try {
    await mongoose.connect(config?.databaseURL as string)
    logger.info('🛢 Database in connected successfully')

    app.listen(config?.port, () => {
      logger.info(`UMS listening on port ${config?.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connect database❌', error)
  }
}
RunServer()
