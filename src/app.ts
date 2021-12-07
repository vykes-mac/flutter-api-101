import express from 'express'
import { createConnection } from 'typeorm'
import { user_routes } from './router/user_routes'

const app = express()
app.use(express.json())
app.use(user_routes)

app.listen(3000, async () => {
  await createConnection()
  return console.log('server started on port 3000')
})
