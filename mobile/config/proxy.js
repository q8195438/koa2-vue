var proxyList = {
  '/api': {
    target: 'http://localhost:3001',
    changeOrigin: true
  }
}

console.log('设置代理中...', proxyList)
module.exports = {
  proxyList
}
