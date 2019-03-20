<template>
  <header class="header">
    <div class="header__left" @click="$emit('back')">
      <div class="header__back">
        <img src="~@/assets/img/icon_back.png">
        <span>{{backTitle}}</span>
      </div>
    </div>
    <div class="header__right">
      <div class="header__earn" @click="toEarn">
        <img src="~@/assets/img/icon_earn-money.png">
        <span>{{$t('赚金币')}}</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'GameHeader',
  props: {
    backTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    toEarn() {
      window.location.href = '/game/coin/';
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$height_of_game__header: 0.54rem;
.header {
  height: $height_of_game__header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: rgba(81, 17, 232, 1);
  &__back {
    cursor: pointer;
    margin-left: .3rem;
    img {
      width: 0.08rem;
      height: 0.16rem;
    }
    span {
      font-size: 0.2rem;
      margin-left: 0.13rem;
    }
  }
  &__earn {
    margin-right: 0.3rem;
    cursor: pointer;
    img {
      width: 0.22rem;
      height: 0.22rem;
      margin-right: 0.05rem;
    }
    span {
      font-size: 0.16rem;
    }
  }
}
</style>
