const express = require('express')
const {signup , login} = require('../controller/userController')
const {checkUser} = require('../middleware/authMiddleware')
const userRouter = express.Router()


userRouter.post('/check', checkUser)
userRouter.post('/register', signup)
userRouter.post('/login', login)


module.exports = userRouter