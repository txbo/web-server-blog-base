const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id
  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyworld = req.query.keyworld || ''
    const listData = getList(author, keyworld)
    return new SuccessModel(listData)
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id)
    return new SuccessModel(data)
  }
  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog(blogData)
    return new SuccessModel(data)
  }
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const blogData = req.body
    const result = updateBlog(blogData)
    if (result) return new SuccessModel(result)
    else return new ErrorModel('更新博客失败')
  }
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id)
    if (result) return new SuccessModel(result)
    else return new ErrorModel('删除博客失败')
  }
}

module.exports = handleBlogRouter