const getList = (author, keyworld) => {
  return [{
    id: 1,
    title: 'title a',
    content: 'content a',
    createTime: 1556441542725,
    author: 'zhangsan'
  }, {
    id: 2,
    title: 'title b',
    content: 'content b',
    createTime: 1556441589677,
    author: 'lisi'
  }]
}

const getDetail = id => {
  return {
    id: 1,
    title: 'title a',
    content: 'content a',
    createTime: 1556441542725,
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}