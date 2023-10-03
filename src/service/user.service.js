const connection = require('../app/database')

class UserService {
  async create (user) {

    const { username, password } = user

    const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'

    return await connection.execute(statement, [username, password])
  }

}

module.exports = new UserService()