import { Router } from 'express'
import {  getUsers, refreshAccessToken, signin, signout, signup } from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { addTodo, deleteTodo, getTodos } from '../controllers/todo.controller.js'

const router = Router()

router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/getusers').get(getUsers)

// secured routes
router.route("/signout").post(verifyJWT,signout)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/addtodo").post(verifyJWT,addTodo)
router.route("/gettodos").post(verifyJWT,getTodos)
router.route("/deletetodo").post(verifyJWT,deleteTodo)


export default router