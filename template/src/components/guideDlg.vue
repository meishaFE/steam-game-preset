<template>
  <div class="dialog-container dialog-container--fixed">
    <div class="game__dialog--guide">
      <h2>{{ $t('游戏指南') }}</h2>
      <div class="desc-container">
        <img src="@assets/img/icon_game-guide@2x.png" />
      </div>
      <st-button @click="closeGuide">{{ $t('我已阅读') }}</st-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameDialogGuide',
  methods: {
    closeGuide() {
      this.$store.commit('SETGAMEPAGESTATE', 0);
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.game__dialog--guide {
  display: inline-block;
  vertical-align: middle;
  width: 9.5rem;
  height: 6.34rem;
  max-height: calc(100% - 0.3rem);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.08rem;
  padding: 0.22rem 0.4rem 0.1rem;
  h2 {
    font-size: 0.24rem;
    line-height: 0.33rem;
    margin-bottom: 0.1rem;
  }
  .desc-container {
    height: 4.8rem;
    max-height: calc(100% - 1.2rem);
    overflow-y: auto;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
    }
  }
}
</style>
