# steam-game-preset

steam-game-preset

## 发布系统发布路径
/data/publish/frontend/steamGame/gameName

## 拉取模板
```bash
npm install --global vue-cli
vue create --preset meishaFE/steam-game-preset gameName
cd gameName
yarn serve
```
### 输入参数说明
### GAME_NAME: 
参数解析：请输入游戏名，数字在前，如3dinosuar

参数用途：
1. 用于项目的发布路径`/game/3dinosaur/`，路由如下 `https://test-steam.meishakeji.com/game/3dinosaur/`
2. 用于打包发布的文件夹命名，打包出来的文件夹名称为 `3dinosaur`
3. localStorage内游戏语言的标志位，`{"3dinosaur":"cn", "bridge":"en"}`，根据该名字来定义游戏的语言类型

### GAME_SERVER_ID: 
参数解析：请输入后端定义的游戏 ID

参数用途：后端接口返回的数据里面代表改游戏的id

### IS_GAME_HAS_EN_VERSION
参数解析：该游戏是否有英文版本，默认否

## 本地开发
```shell
# ./steam-game-preset 应当是一个包含 preset.json 的文件夹
vue create --preset ./steam-game-preset my-project

# 或者，直接使用当前工作目录下的 json 文件：
vue create --preset preset.json my-project
```



