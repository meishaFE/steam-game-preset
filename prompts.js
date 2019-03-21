module.exports = [
  {
    name: 'gameName',
    message: '请输入后端定义的游戏名（如：3dinosuar）：',
    type: 'input',
    default: 'gameName'
  },
  {
    name: 'gameServerId',
    message: '请输入前端定义的游戏 ID：',
    type: 'input',
    default: 'gameServerId'
  },
  {
    name: 'gameFrontId',
    message: '请输入后端定义的游戏 ID：',
    type: 'input',
    default: 'gameFrontId'
  },
  {
    name: 'isGameHasEnVersion',
    message: '该游戏是否有英文版本？',
    type: 'confirm',
    default: false
  }
];
