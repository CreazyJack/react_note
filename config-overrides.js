
/* 
  基于 customize 和 react-app-rewired 的定制化配置文件 
*/

// 从 customize-car 中引入一些相关的方法
const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require('customize-cra')
const theme = require('./theme')
module.exports = override(
  addLessLoader({ 
    javascriptEnabled: true,
    modifyVars: theme 
  }),
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
)
