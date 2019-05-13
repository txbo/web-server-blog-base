const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}

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
          res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
          return new SuccessModel(data) 
        } else return new ErrorModel('登录失败')
      }
    )
  }
}

module.exports = handleUserRouter