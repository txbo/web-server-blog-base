const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method
  // 登陆
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, passworld } = req.body
    const result = loginCheck(username, passworld)
    if (result) return new SuccessModel(result)
    else return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter