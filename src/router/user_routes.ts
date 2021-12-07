import { Router } from 'express'
import { User } from '../entity/User'

const user_routes = Router()

user_routes.post('/user', async (req, res) => {
  const user = new User(
    req.body['first_name'],
    req.body['last_name'],
    req.body['age']
  )
  const results = await user.save()
  res.json(results)
})

//get:Read
user_routes.get('/user/:id', async (req, res) => {
  const user = await User.findOne(req.params.id)
  if (user === undefined) return res.send('User not found')
  res.json(user)
})

//put: Update/Replace
user_routes.put('/user/:id', async (req, res) => {
  const user = await User.findOne(req.params.id)
  if (user === undefined) return res.send('User not found')
  user.firstName = req.body['first_name']
  user.lastName = req.body['last_name']
  user.age = req.body['age']

  const result = await user.save()
  res.json(result)
})

//patch: Update/Modify
user_routes.patch('/user/:id', async (req, res) => {
  const user = await User.findOne(req.params.id)
  if (user === undefined) return res.send('User not found')
  user.firstName = req.body['first_name']
  user.lastName = req.body['last_name']
  user.age = req.body['age']

  const result = await user.save()
  res.json(result)
})

//delete: Delete
user_routes.delete('/user/:id', async (req, res) => {
  const user = await User.findOne(req.params.id)
  if (user === undefined) return res.send('User not found')

  const result = await user.remove()
  res.json(result)
})

export { user_routes }
