<template>
  <view class="viewport">
    <!-- 导航 -->
    <MyNavbar type="LOCATION">
      <!-- 搜索栏 -->
      <view style="padding: 20upx 5upx 20upx 5upx;">
        <uni-search-bar style="padding: 0;" radius="100" placeholder="搜索" @confirm="onConfirm" />
      </view>
    </MyNavbar>
    <!-- 滚动容器 -->
    <scroll-view 
      enable-back-to-top 
      class="scroll-view" 
      scroll-y 
      refresher-enabled 
      @refresherrefresh="onRefresh" 
      :refresher-triggered="triggered"
      @refresherrestore="onRestore"
      @refresherabort="onAbort"
      refresher-background="lightgreen" 
      @refresherpulling="onPulling"
    >
      <!-- 页面内容体 -->
      <view class="body-container">

        <!-- 轮播 -->
        <MySwiper class="my-swiper"/>
        <!-- 首页分类 -->
        <!-- <MyCategory /> -->
        <MySaleBuy />
        <!-- 推荐数据 -->
        <MyGoods />

      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import MyGoods from '@/components/MyGoods.vue';
import MySaleBuy from './components/MySaleBuy.vue';
import { ref } from 'vue';

const triggered = ref<any>(false);

const onConfirm = () => {}
const onRefresh = () => {
  console.log("refresh.");
  setTimeout(() => {
      triggered.value = false;
      console.log("refresh..",triggered.value);
  }, 3000);
}
const onRestore = () => {
  triggered.value = 'restore';
  console.log("restore....");
}

const onAbort =() => {
  console.log("onAbort....");
}

const onPulling = () => {
  console.log("onPulling....");
}

</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body-container {
  padding: 0 20upx 0 20upx;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
