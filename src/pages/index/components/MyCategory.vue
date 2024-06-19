<template>
  <view class="my-category">
    <navigator
      url="/pages/index/index"
      v-for="(item, index) in categorys"
      :key="index"
      hover-class="none"
      class="category-item"
    >
      <view class="category-item-wrapper">
        <image class="icon" src="@/static/images/category-item.png"></image>
        <text class="text">{{ item }}</text>
      </view>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categorys = ref(["电器","电器","电器","电器","电器",
                      "电器","电器","电器","电器","电器"]);

</script>

<style lang="scss">
.my-category {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20upx;
  border-radius: 20upx;
  background-color: #EDEDED;
  padding-top: 20upx;
  .category-item {
    padding: 0 21upx 20upx 21upx;
    .category-item-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100upx;
      flex-direction: column;
      box-sizing: border-box;
      .icon {
        width: 100upx;
        height: 100upx;
      }
      .text {
        font-size: 26rpx;
        color: #666;
      }
    }
  }
}
</style>