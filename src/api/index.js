/**
 * 自动引入当前文件夹下所有module
 * require.context(directory, useSubdirectories = false, regExp = /^.//);
 * @param {String} directory 读取文件的路径
 * @param {Boolean} directory 匹配文件的正则表达式
 * @param {regExp} regExp 读取文件的路径
 */
 const modulesFiles = require.context(
    './', // 在当前目录下查找
    false, // 不遍历子文件夹
    /\.js$/ // 正则匹配 以 .js结尾的文件
)
 const modules = modulesFiles.keys().reduce((modules, modulePath) => {
   const moduleName = modulePath.replace(/^.\/(.*)\.js/,'$1')
   const value = modulesFiles(modulePath)
   modules[moduleName] = value.default
   return modules
   }, {})
export default modules

