module.exports = {
  devServer: {
    port: 8081,     // 端口号
  },
  chainWebpack(config){
  
        config.optimization.splitChunks({
            cacheGroups:{
                common: {//commons 一般是是个人定义的
                    name: 'chunk-common', // 打包后的文件名
                    chunks: 'initial',
                    minChunks: 1,
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority: 1,
                    reuseExistingChunk: true
                },
                vendors: {//vendor 是导入的 npm 包
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    // maxSize: 600000,
                    // maxInitialRequests: 20,
                    priority: 2,
                    // reuseExistingChunk: true,
                    // enforce: true
                },
                element: {//把antDesignVue从chunk-vendors.js提取出来。当然我们也可以把mixins，vue.min.js等等也按照类似配置提取出来
                    name: 'chunk-element',
                    test: /[\\/]element-ui[\\/]/,
                    chunks: 'initial',
                    priority: 3,
                    // maxSize: 600000,
                    reuseExistingChunk: true,
                    // enforce: true
                }
            }
        })
    
}, 
};
