const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id
  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const result = getList(author, keyword)
    return result.then(listData => new SuccessModel(listData))
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id)
    return result.then(data => new SuccessModel(data))
  }
  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const author = 'txbo' // 假数据
    const blogData = req.body
    blogData.author = author
    const result = newBlog(blogData)
    return result.then(data => new SuccessModel(data))
  }
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const blogData = req.body
    const result = updateBlog(id, blogData)
    return result.then(
      value => value ? new SuccessModel(value) : new ErrorModel('更新博客失败')
    )
  }
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'txbo' // 假数据
    const result = delBlog(id, author)
    return result.then(
      value => value ? new SuccessModel(value) : new ErrorModel('删除博客失败')
    )
  }
}

module.exports = handleBlogRouter