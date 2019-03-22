<template>
<div :class="[!disabled? 'steam-button-wrap' : '', `steam-button-wrap__${size}`]">
  <button class="steam-button is-disabled"
      @click="handleClick"
      :disabled="disabled"
      :class="[
        type ? 'steam-button__' + type : 'steam-button__default',
        size ? `steam-button__${type}__` + size : 'steam-button__default__medium',
        disabled ? `steam-button__${type}__is-disabled`: ''
      ]">
    <span v-if="$slots.default"><slot></slot></span>
</button>
</div>
</template>
<script>
export default {
  name: 'SteamButton',
  props: {
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium'
      },
      disabled: Boolean
  },
  data() {
    return {};
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.steam-button-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.64rem;
  height: .54rem;
  border-radius: .04rem;
  &:hover {
    background: rgba(255,255,255,0.50);
  }
  &__small {
    width: 1.04rem;
    height: .4rem;
  }
  &__mini {
    width: .74rem;
    height: .36rem;
  }
}
.steam-button {
  width: 1.6rem;
  height: .5rem;
  line-height: .5rem;
  background: rgba(255,228,86,1);
  border: 2px solid #000000;
  box-shadow: inset -4px -4px 0 0 rgba(224,141,32,0.50), inset 4px 4px 0 0 rgba(255,255,255,0.60);
  border-radius: .04rem;
  cursor: pointer;
  opacity: 0.6;
  span {
    font-size: .2rem;
    color: #000000;
    text-align: center;
  }
  &__default {
    &__small {
      width: 1rem;
      height: .36rem;
      line-height: .36rem;
      border: 1px solid #000000;
      box-shadow: inset -3px -3px 0 0 rgba(224,141,32,0.50), inset 3px 3px 0 0 rgba(255,255,255,0.60);
      span {
        font-size: .16rem;
        color: #000000;
        text-align: center;
      }
    }
    &__mini {
      width: .7rem;
      height: .32rem;
      line-height: .32rem;
      border: 1px solid #000000;
      box-shadow: inset -2px -2px 0 0 rgba(224,141,32,0.50), inset 2px 2px 0 0 rgba(255,255,255,0.60);
      span {
        font-size: .14rem;
        color: #333333;
        text-align: center;
      }
    }
    &__is-disabled {
      background: #D1AC76;
      cursor: not-allowed !important;
      span {
        color: rgba(0,0,0,0.50);
      }
    }
  }
  &__primary {
    background: #4411C3;
    box-shadow: inset -4px -4px 0 0 rgba(36,0,127,0.60), inset 4px 4px 0 0 rgba(118,68,243,0.60);
    span {
      color: #FFE456;
    }
    &__small {
      width: 1rem;
      height: .36rem;
      line-height: .36rem;
      border: 1px solid #000000;
      box-shadow: inset -3px -3px 0 0 rgba(36,0,127,0.60), inset 3px 3px 0 0 rgba(118,68,243,0.60);
      span {
        font-size: .16rem;
        color: #FFFFFF;
        text-align: center;
      }
    }
    &__mini {
      width: .7rem;
      height: .32rem;
      line-height: .32rem;
      border: 1px solid #000000;
      box-shadow: inset -2px -2px 0 0 rgba(26,0,127,0.60), inset 2px 2px 0 0 rgba(118,68,243,0.60);
      span {
        font-size: .14rem;
        color: #FFFFFF;
        text-align: center;
      }
    }
    &__is-disabled {
      background: #4B21B6;
      cursor: not-allowed !important;
      span {
        color: rgba(255,228,86,0.50);
      }
    }
  }
}
</style>
