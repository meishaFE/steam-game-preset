module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'babel-polyfill': '^6.26.0',
      'meisha-fe-watch': '^1.0.2',
      'vue-i18n': '^8.9.0',
      'steam-game-ui': '^0.1.4'
    },
    devDependencies: {
      '@vue/eslint-config-standard': '^4.0.0',
      'eslint-config-standard': '^12.0.0',
      'eslint-plugin-import': '^2.16.0',
      'eslint-plugin-node': '^8.0.1',
      'eslint-plugin-promise': '^4.0.1',
      'eslint-plugin-standard': '^4.0.0',
      'compression-webpack-plugin': '^2.0.0',
      husky: '^1.3.1',
      'lint-staged': '^8.1.5',
      prettier: '^1.16.4'
    },
    husky: {
      hooks: {
        'pre-commit': 'lint-staged'
      }
    },
    'lint-staged': {
      '*.{js,vue}': [
        'prettier --write"',
        'eslint --ext .js,.vue src',
        'git add'
      ]
    }
  });

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template', {
    projectName: rootOptions.projectName,
    gameName: options.gameName,
    gameServerId: options.gameServerId,
    isGameHasEnVersion: options.isGameHasEnVersion
  });
};
