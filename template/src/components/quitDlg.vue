<template>
  <div class="dialog-container dialog-container--maxtop">
    <div class="game__dialog--gameend">
      <h2>{{ $t('真的要退出游戏了吗？') }}</h2>
      <p>{{ $t('（游戏中途退出，视为放弃本次挑战）') }}</p>
      <st-button class="quitbtn" type="primary" @click="gameQuit">{{$t('狠心退出')}}</st-button>
      <st-button class="continuebtn"  @click="gameContinue">{{ $t('继续游戏') }}</st-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameDialogGameQuit',
  methods: {
    gameQuit() {
      window.location.href = '/student/gamecenter';
    },
    gameContinue() {
      this.$store.commit('SETGAMEPAGESTATE', 0);
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.game__dialog--gameend {
  display: inline-block;
  vertical-align: middle;
  background: url('~@/assets/img/pic_getout@2x.png') center/100% no-repeat;
  width: 4.54rem;
  height: 3.65rem;
  h2 {
    font-size: 0.2rem;
    color: rgba(255, 255, 255, 1);
    margin-top: 1.79rem;
  }
  p {
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
  }
}
.quitbtn {
  display: inline-block;
}
.continuebtn {
  margin-left: 0.2rem;
  display: inline-block;
}
</style>
