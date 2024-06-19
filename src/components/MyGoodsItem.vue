<template>
  <view class="my-goods-item">
    {{ good }}
  </view>
</template>

<script setup lang="ts">
defineProps<{
  good: any
}>();

</script>

<style lang="scss">
.my-goods-item {
  width: 350upx;
  height: 360upx;
  background-color: aquamarine;
  border-radius: 20upx;
  margin: 10upx 0;
}

</style>