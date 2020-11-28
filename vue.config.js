// vue.config.js
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, "./", dir)
}
module.exports = {
  assetsDir: "static",
  outputDir: "dist",
  productionSourceMap: process.env.NODE_ENV !== "production",
  chainWebpack: (config) => {
    // svg rule loader
    const svgRule = config.module.rule("svg") // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["./src/assets/svg"],
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }],
      }))
      .end()
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule("images")
    imagesRule.exclude.add(resolve("src/assets/svg"))
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://www.leelei.info/api",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  },
  lintOnSave: true,
}
