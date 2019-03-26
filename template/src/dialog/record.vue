<template>
  <div class="dialog-container dialog-container--maxtop">
    <div class="game__dialog--gamerecord">
      <img class="game__dialog--gamerecord__icon"
            src="~@/assets/img/icon_close.png"
            @click="dlgClose">
      <h2>
        {{title}}
      </h2>
      <div class="game__dialog--gamerecord__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameDialogRecord',
  methods: {
    dlgClose() {
      this.$emit('recordDlgClose');
    }
  },
  props: {
      title: {
        type: String,
        default: '我的挑战记录'
      }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.game__dialog--gamerecord {
  display: inline-block;
  vertical-align: middle;
  width: 9.2rem;
  min-height: 5.64rem;
  background-color: rgba(81, 17, 232, 0.8);
  padding: .2rem .2rem .12rem .2rem;
  h2 {
    font-size: 0.2rem;
    color: rgba(255, 255, 255, 1);
  }
  &__icon {
    width: .127rem;
    height: .125rem;
    float: right;
    margin: .1rem;
    cursor: pointer;
  }
  &__content {
    margin-top: .2rem;
    width: 100%;
    min-height: 4.44rem;
    font-size: .14rem;
  }
}
</style>