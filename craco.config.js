const path = require('path')
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
      // ....其他的一些配置
    }
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  //配置代理解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://codercba.com:9002',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
