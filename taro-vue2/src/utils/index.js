const modules = require.context('./modules', true, /\.js/)
modules.keys().forEach((moduleName, modulePath) => {
  console.log('modules', moduleName, modulePath)
})
