module.exports = [
  {
    name: 'gameName',
    message: '请输入后端定义的游戏名（如：3dinosuar）：',
    type: 'input'
  },
  {
    name: 'gameServerId',
    message: '请输入前端定义的游戏 ID：',
    type: 'input'
  },
  {
    name: 'gameFrontId',
    message: '请输入后端定义的游戏 ID：',
    type: 'input'
  },
  {
    name: 'isGameHasEnVersion',
    // 确认对话只在用户已经选取了特性的时候展示
    message: '该游戏是否有英文版本？',
    type: 'confirm'
  }
];
