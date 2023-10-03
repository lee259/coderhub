const app = require('./app/index.js')
const { SERVER_PORT } = require('./config/server')

app.listen(SERVER_PORT, () => {
  console.log('coderhub的服务器启动成功');
})