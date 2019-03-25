<template>
  <div class="dialog-container dialog-container--maxtop">
    <div class="game__dialog--gameend">
      <h2>真的要退出游戏了吗？</h2>
      <p>（游戏中途退出，视为放弃本次挑战）</p>
      <steam-button class="quitbtn" type="primary" @click="$emit('gameQuit')">狠心退出</steam-button>
      <steam-button class="continuebtn" type="default" @click="$emit('gameContinue')">继续游戏</steam-button>
    </div>
  </div>
</template>
<script>
import SteamButton from '@/components//button';
export default {
  name: 'GameDialogGameQuit',
  methods: {
  },
  components: {
    SteamButton
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
    font-size: .14rem;
    color: rgba(255,255,255,0.80);
    margin-top: .1rem;
    margin-bottom: .3rem;
  }
}
.quitbtn {
  display: inline-block;
}
.continuebtn {
  margin-left: .2rem;
  display: inline-block;
}
</style>
