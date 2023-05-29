import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Testing the APP
app.get('/', (req: Request, res: Response) => {
  res.send('hellow world')
})

export default app
