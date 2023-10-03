const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  poot: 3306,
  database: 'coderhub',
  user: 'root',
  password: '123456',
  connectionLimit: 10,
})

connectionPool.getConnection((err, connection) => {
  if (err) { 
    console.log('连接失败', err)
    return;
  }
  connection.connect(err => {
    if (err) {
      console.log('连接失败', err)
    } else {
      console.log('连接成功');
    }
  })
})

const connection = connectionPool.promise()

module.exports = connection