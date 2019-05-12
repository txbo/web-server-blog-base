const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
  return promis = new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

module.exports = { exec }