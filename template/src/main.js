import MeishaWatch from 'meisha-fe-watch';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import SteamUI from 'steam-game-ui';

import router from './router';
import store from './store';

import {
  API,
  ENV,
  GAME_SERVER_ID,
  GAME_NAME,
  IS_GAME_HAS_EN_VERSION,
  STATIC_URL
} from '@/config';

import filters from '@/filters';
import { setObjectConst } from '@/utils';
import messages from '@/lang';
import App from '@/App.vue';

// 初始化通用函数
steamgame.initSteam(Vue, STATIC_URL);

// set vue i18n
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'cn',
  messages
});

Vue.use(SteamUI);
// init meisha-watch
MeishaWatch.init({
  isReport: ENV.prod, // 是否向后端提交MeishaWatch收集信息，默认为true，可自行检测当前环境，在开发、测试、预发布环境关闭，如：isReport:
  reportURL: '//pre-monitor.meishakeji.com/v1/fex/post_log', // 向后端提交MeishaWatch收集信息的URL(必填，否则无法提交)
  projectId: 'steam', // 日志系统设置的项目英文名（必填，否则无法提交）
  partitionId: 'biggame' // 日志系统设置的分区英文名称（必填，否则无法提交)
});

Vue.use(MeishaWatch.useVue());

// add filters
addFilters(Vue, filters);

// set window const
setObjectConst(window, { API });

Vue.config.productionTip = false;

$http
  .post(
    API.COMMON.CHECK_AUTH,
    {
      data: {
        auth: window.localStorage.getItem('auth')
      }
    },
    true
  )
  .then(
    () => {
      const userInfo = window.localStorage.getItem('userInfo');
      if (userInfo) {
        MeishaWatch.setUser(userInfo);
        store.commit('SETUSERINFO', JSON.parse(userInfo));
        $http
          .post(API.COMMON.LANG, {
            data: { classId: JSON.parse(userInfo).classId }
          })
          .then(res => {
            if (res.data) {
              const lang = steamgame.setGameLangToLocal(
                res.data,
                GAME_NAME,
                GAME_SERVER_ID,
                IS_GAME_HAS_EN_VERSION
              );
              i18n.locale = lang.local;
              store.commit('SETISCANTOGGLELANG', lang.server.length >= 2);
            }
            /* eslint-disable no-new */
            new Vue({
              el: '#app',
              router,
              store,
              i18n,
              components: { App },
              template: '<App/>'
            });
          });
      } else {
        window.location.href = '/';
      }
    },
    () => {
      window.location.href = '/';
    }
  );

function addFilters(Vue, filters) {
  for (let [key, value] of Object.entries(filters)) {
    Vue.filter(key, value);
  }
}
