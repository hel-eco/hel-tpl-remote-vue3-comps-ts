/*
|--------------------------------------------------------------------------
|
| 生成meta
|
|--------------------------------------------------------------------------
*/
const process = require('process');
const path = require('path');
const helDevUtils = require('hel-dev-utils');
const packageJson = require('../package.json');
const appInfo = require('../appInfo');

helDevUtils.extractHelMetaJson({
  subApp: appInfo,
  buildDirFullPath: path.join(__dirname, '../hel_dist'),
  packageJson,
}).catch(err => {
  console.error(err);
  process.exit(-1);
});
