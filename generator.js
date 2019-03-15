const os = require('os');
const fs = require('fs');
const path = require('path');

module.exports = (api, options, rootOptions) => {
  // 项目依赖
  api.extendPackage({
    dependencies: {
      'babel-polyfill': '^6.26.0',
      katex: '^0.10.1',
      'meisha-fe-watch': '^1.0.2',
      'vue-i18n': '^8.9.0'
    },
    devDependencies: {
      'eslint-config-standard': '^12.0.0',
      'eslint-plugin-import': '^2.16.0',
      'eslint-plugin-node': '^8.0.1',
      'eslint-plugin-promise': '^4.0.1',
      'eslint-plugin-standard': '^4.0.0',
      'compression-webpack-plugin': '^2.0.0'
    }
  });

  // 生成项目文件
  api.render('./template', {
    projectName: rootOptions.projectName,
    gameName: options.gameName,
    gameServerId: options.gameServerId,
    gameFrontId: options.gameFrontId,
    isGameHasEnVersion: options.isGameHasEnVersion
  });
};
