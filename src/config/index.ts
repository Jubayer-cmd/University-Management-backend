import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  nodeEnv: process.env.NODE_ENV,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
}
