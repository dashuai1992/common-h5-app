<template>
  <view class="swiper-container">
    <!-- 轮播 -->
    <swiper autoplay circular class="swiper-box" @change="change">
      <swiper-item class="swiper-item-container" v-for="(item ,index) in info" :key="index">
        <view class="swiper-item" :class="'swiper-item' + index">
          <text style="color: #fff; font-size: 32px;">{{index+1}}</text>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const info = ref([
  {content: "内容A"},
  {content: "内容B"},
  {content: "内容C"},
]);

const change= () => {

}
</script>

<style lang="scss">
.swiper-container {
  border-radius: 20upx;
  overflow: hidden;
}

.swiper-box {
  height: 200px;
}

.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #fff;
}
.swiper-item0 {
  background-color: #cee1fd;
}

.swiper-item1 {
  background-color: #b2cef7;
}

.swiper-item2 {
  background-color: #cee1fd;
}
</style>