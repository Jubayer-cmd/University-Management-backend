import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRouter)

//Testing the APP
app.get('/', (req: Request, res: Response) => {
  res.send('hellow world')
})

export default app
