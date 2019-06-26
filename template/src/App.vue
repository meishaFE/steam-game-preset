<template>
  <div id="app">
    <Layout v-show="ready" />
    <div class="app-loading" v-show="!ready">
      <i />
      <h4>{{ $t('加载中') }}</h4>
    </div>
  </div>
</template>

<script>
import Layout from './views/Layout.vue';
const preLoadImg = steamgame.preLoadImg;
export default {
  name: 'GameApp',
  data() {
    return {
      ready: false
    };
  },
  created() {
    preLoadImg().then(() => {
      this.ready = true;
    });
  },
  components: {
    Layout
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import './assets/scss/reset';
@import './assets/scss/dialog';
@import './assets/scss/helpers';

body {
  font-size: 0;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
}

::-webkit-scrollbar {
  width: 5px;
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  height: 1px;
}

.app-loading {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: rgba(17, 17, 17, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
  border-radius: .08rem;
  text-align: center;
  > i {
    display: inline-block;
    width: .36rem;
    height: .36rem;
    margin-top: .2rem;
    background: url("~/@assets/img/loading.png") center/100% no-repeat;
    animation: circle 0.5s steps(12, end) infinite;
  }
  > h4 {
    position: absolute;
    bottom: .14rem;
    width: 100%;
    font-size: .13rem;
    line-height: 1;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
}

@keyframes circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
