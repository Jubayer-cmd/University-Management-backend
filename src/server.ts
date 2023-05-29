import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function RunServer() {
  try {
    console.log(config?.databaseURL)
    await mongoose.connect(config?.databaseURL as string)
    console.log('🛢 Database in connected successfully')

    app.listen(config?.port, () => {
      console.log(`UMS listening on port ${config?.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database❌', error)
  }
}
RunServer()
