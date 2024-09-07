import {Router} from 'express'
import { getUser, createUser, deleteUser } from './controllers/UserController.js'

const route = Router()

route.get('/users', getUser)
route.post('/users', createUser)
route.delete('/users/:id', deleteUser)

export default route