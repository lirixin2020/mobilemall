module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度（也可以不配置）
      unitPrecison: 5, // 指定px转换为视窗单位值的小数位（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar'], // 指定不需要转换的类
      minPixelValue: 1, // 小于或等于1px 不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换px
      exclude: [/TabBar/]
    }
  }
}
