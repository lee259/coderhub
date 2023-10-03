const koaRouter = require('@koa/router')
const userController = require('../controller/user.controller')

const userRouter = new koaRouter({
  prefix: '/users'
})
// 用户注册接口
userRouter.post('/register', userController.create)

module.exports = userRouter