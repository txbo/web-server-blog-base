const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { set } = require('../db/redis')

const handleUserRouter = (req, res) => {
  const method = req.method
  // 登陆
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    // const { username, password } = req.query
    const result = login(username, password)
    return result.then(
      data => {
        if (data.username) {
          console.log(data, req.session)
          console.log('$$', data.username, data.realname, req.sessionId)
          req.session.username = data.username
          req.session.realname = data.realname
          console.log('###', req.session.username)
          set(req.sessionId, req.session)
          return new SuccessModel(data) 
        } else return new ErrorModel('登录失败')
      }
    )
  }
  // if (method === 'GET' && req.path === '/api/user/login-test') {
  //   if (req.session.username) {
  //     return Promise.resolve(new SuccessModel({
  //       session: req.session
  //     }))
  //   }
  //   return Promise.resolve(new ErrorModel('尚未登录'))
  // }
}

module.exports = handleUserRouter