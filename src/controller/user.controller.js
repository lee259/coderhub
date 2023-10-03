const userService = require('../service/user.service');

class UserController {
  async create (ctx, next) {
    console.log(ctx.request.body);

    const result = await userService.create(ctx.request.body)

    ctx.body = {
      message: '创建用户成功',
      data: result
    }
  }
}

module.exports = new UserController()