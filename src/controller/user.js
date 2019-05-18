const { exec, escape } = require('../db/mysql')
const { genPassWord } = require('../utils/cryp')

const login = (username, password) => {
  const escapeUserName = escape(username)
  const escapePassWord = escape(genPassWord(password))
  const sql = `
    select username, realname from users
    where username=${escapeUserName} and password=${escapePassWord}
  `
  console.log(sql)
  return exec(sql).then(users => users[0] || {})
}

module.exports = {
  login
}