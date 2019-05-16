const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method
  // 登陆
  if (method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(
      data => {
        if (data.username) {
          req.session.username = data.username
          req.session.realname = data.realname
          return new SuccessModel(data) 
        } else return new ErrorModel('登录失败')
      }
    )
  }
}

module.exports = handleUserRouter