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
  }
  // style: {
  //   postcss: {
  //     mode: 'extends',
  //     loaderOptions: {
  //       postcssOptions: {
  //         ident: 'postcss',
  //         plugins: [
  //           [
  //             'postcss-pxtorem',
  //             {
  //               rootValue: 750 / 10, // 根元素字体大小
  //               propList: ['*']
  //             }
  //           ]
  //         ]
  //       }
  //     }
  //   }
  // }
}
