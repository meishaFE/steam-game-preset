<template>
  <header class="header">
    <div class="header__left" @click="$emit('back')">
      <div class="header__back">
        <img src="~@/assets/img/icon_back.png" />
        <span>{{ $t('退出游戏') }}</span>
      </div>
    </div>
    <div class="header__right">
      <div class="header__money">
        <img src="~@/assets/img/icon_money@2x.png" />
        <span>{{ gameInfo.coin || 0 }}</span>
      </div>
      <div class="select-lang" v-show="isCanToggleLang">
        <div @click="dropDownLang" class="select-lang__selected">
          {{ $i18n.locale === 'cn' ? '中文' : 'English' }}
        </div>
        <ul v-show="selectLangFlag" class="select-lang__options">
          <li @click="selectLang('en')" class="select-lang__options-item">
            English
          </li>
          <li @click="selectLang('cn')" class="select-lang__options-item">
            中文
          </li>
        </ul>
      </div>
      <div class="header__guide" @click="guide">
        <img src="~@/assets/img/icon_game-guide@2x.png" />
        <span>{{ $t('游戏指南') }}</span>
      </div>
      <div class="header__earn" @click="toEarn">
        <img src="~@/assets/img/icon_earn-money.png" />
        <span>{{ $t('赚金币') }}</span>
      </div>
      <div class="header__prop" @click="toOpenProp">
        <img src="~@/assets/img/icon_shop@2x.png" />
        <span>{{ $t('道具箱') }}</span>
      </div>
    </div>
  </header>
</template>
<script>
import { GAME_NAME } from '@/config';
export default {
  name: 'GameHeader',
  props: {
    backTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectLangFlag: false
    };
  },
  computed: {
    isCanToggleLang() {
      return this.$store.getters.isCanToggleLang;
    },
    gameInfo() {
      return this.$store.getters.gameInfo;
    }
  },
  methods: {
    dropDownLang() {
      this.selectLangFlag = !this.selectLangFlag;
    },
    selectLang(type) {
      steamgame.setLang(GAME_NAME, type);
      this.$i18n.locale = type;
      this.selectLangFlag = !this.selectLangFlag;
    },
    toOpenProp() {
      alert('打开道具箱');
    },
    guide() {
      this.$store.commit('SETGAMEPAGESTATE', 4);
    },
    toEarn() {
      window.location.href = `/game/coin/?originGame=${GAME_NAME}`;
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
    margin-left: 0.3rem;
    img {
      width: 0.08rem;
      height: 0.16rem;
    }
    span {
      font-size: 0.2rem;
      margin-left: 0.13rem;
    }
  }
  &__right {
    display: flex;
    align-items: center;
  }
  &__guide,
  &__earn,
  &__prop {
    height: 0.54rem;
    margin-right: 0.3rem;
    display: flex;
    align-items: center;
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
  &__guide {
    padding-left: 0.3rem;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }
  &__money {
    height: $height_of_game__header;
    display: flex;
    align-items: center;
    img {
      width: 0.22rem;
      height: 0.22rem;
    }
    span {
      margin-left: 0.08rem;
      margin-right: 0.14rem;
      font-size: 0.18rem;
      min-width: 0.3rem;
      color: rgba(255, 255, 255, 1);
    }
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
      background: url('~@/assets/img/icon_change-language.png') center/100%
        no-repeat;
    }
  }
  &__options {
    width: 100%;
    padding: 0.1rem 0.12rem !important;
    position: absolute;
    z-index: 2;
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
</style>
