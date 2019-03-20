<template>
  <div class="game">
    <game-header
      :back-title="backTitle"
      @back="back"
    />
    <div class="game__content">
      <router-view />
    </div>
    <game-end-dlg v-if="gameOver"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import GameHeader from '@/components/GameHeader';
import GameEndDlg from '@/dialog/end';

export default {
  name: 'Game',
  data() {
    return {
      backTitle: '返回',
      gameOver: false
    };
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    back() {
      alert('确定要退出游戏?');
    }
  },
  components: {
    GameEndDlg,
    GameHeader
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
.game {
  width: 100%;
  height: 100%;
  background: rgba(85, 94, 251, 1);
  &__content {
    position: relative;
    height: calc(100% - 0.54rem);
    overflow: auto;
    text-align: center;
    font-size: 0;
    padding-top: 0.1rem;
  }
  &__bar {
    position: absolute;
    top: 0;
    right: 0;
    height: 0.54rem;
    line-height: 0.54rem;
    font-size: 0;
    color: rgba(255, 255, 255, 1);
    * {
      display: inline-block;
      vertical-align: middle;
    }
    &__money {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
      span {
        margin-left: 0.08rem;
        margin-right: 0.14rem;
        font-size: 0.18rem;
      }
    }
    ul {
      padding-left: 0.2rem;
      li {
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
  }
  &__dialog--quit {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 3.89rem;
    height: 2.43rem;
    background-color: rgba(81, 17, 232, 0.8);
    border-radius: 0.08rem;
    padding-top: 0.2rem;
    color: rgba(255, 255, 255, 1);
    h2 {
      font-size: 0.24rem;
      line-height: 0.33rem;
    }
    h4 {
      font-size: 0.18rem;
      line-height: 0.25rem;
      margin: 0.37rem 0 0.5rem;
    }
    h6 {
      position: absolute;
      top: 1.2rem;
      left: 0;
      width: 100%;
      font-size: 0.14rem;
    }
  }
  &__result {
    display: inline-block;
    vertical-align: middle;
    &__right {
      width: 4.56rem;
      height: 2.66rem;
      margin-bottom: 0.5rem;
    }
    &__wrong {
      width: 2.05rem;
      height: 2.05rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 0.24rem;
      color: rgba(255, 255, 255, 1);
      line-height: 0.33rem;
      margin-bottom: 0.8rem;
      &.margin-bottom-15 {
        margin-bottom: 0.15rem;
      }
    }
    h4 {
      font-size: 0.18rem;
      color: rgba(255, 255, 255, 1);
      line-height: 0.25rem;
      margin-bottom: 0.3rem;
      span {
        color: rgba(252, 75, 78, 1);
      }
    }
    > div {
      height: 0.5rem;
    }
  }
    .select-lang {
    width: 1.18rem;
    height: 0.34rem;
    margin: 0 0.3rem;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    line-height: 0.34rem;
    &__selected {
      width: calc(100% - 0.3rem);
      position: relative;
      box-sizing: border-box;
      margin: 0.05rem 0.15rem;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.24rem;
      cursor: pointer;
      &::after {
        content: '';
        width: 0.12rem;
        height: 100%;
        display: inline-block;
        position: absolute;
        right: 0;
        background: url('~@/assets/img/icon_change-language.png') center/100% no-repeat;
      }
    }
    &__options {
      width: 100%;
      padding: 0.1rem 0.12rem !important;
      position: absolute;
      z-index: 10;
      left: 0;
      top: 0.46rem;
      color: #333;
      font-size: 0.16rem;
      line-height: 0.27rem;
      background-color: #fff;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -6px;
        left: 24px;
        border-bottom: 6px solid #fff;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      }
    }
    &__options-item {
      width: 100%;
    }
  }
}
</style>
