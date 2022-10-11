/*
|--------------------------------------------------------------------------
|
| 生成 hel-meta.json
|
|--------------------------------------------------------------------------
*/
const path = require('path');
const helDevUtils = require('hel-dev-utils');
const packageJson = require('../package.json');
const subApp = require('../subApp');

// npm run build_for_cust 设定的 HEL_APP_HOME_PAGE 值指向本地 http-server 静态服务 host
// 该设定会让构建产物时生成的 publicPathOrUrl 优先使用此值，而非 subApp.getPublicPathOrUrl('http://localhost:3000/') 传递的值
helDevUtils.extractHelMetaJson({
  appHomePage: subApp.homePage,
  buildDirFullPath: path.join(__dirname, '../hel_dist'),
  packageJson,
});
