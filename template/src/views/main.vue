<template>
  <div class="game__main">
    <div style="font-size: 20px;color: #fff;">主页面</div>
  </div>
</template>

<script>
export default {
  name: 'GameMain',
  props: {
    guideDlgShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.game__main {
  position: relative;
  height: 100%;
  width: 100%;
}

.dispaly-none {
  display: none !important;
}
</style>
