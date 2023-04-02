const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');

// deploy to unpkg
const appInfo = helDevUtils.createVueSubApp(pkg, { npmCdnType: 'unpkg' });

// deploy to git
// const appInfo = helDevUtils.createVueSubApp(pkg, { defaultHomePage: 'https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1' });

module.exports = appInfo;
