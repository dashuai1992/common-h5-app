<template>
  <view>
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">

      <!-- 头部只有位置信息 -->
      <view v-if="type === 'LOCATION'" class="school-location" @click="goSelectSchool">
        <uni-icons type="location-filled" size="25" color="#717171" />
        <text>{{ useSchool.curSchool?.name }}</text>
      </view>

      <!-- 头部显示标题和左侧操作项 -->
      <view v-if="type === 'TITLE'" class="title-with-operation">

        <!-- 左边操作项 -->
        <view class="left">
          <view class="left-container">
            <uni-icons @click="goBack" type="left" size="25" color="#717171"></uni-icons>
            <text class="splider">|</text>
            <uni-icons @click="goHome" type="home" size="25" color="#717171"></uni-icons>
          </view>
        </view>

        <!-- 中间标题 -->
        <view class="title">
          <text>{{ title }}</text>
        </view>

        <!-- 右边flex占位 -->
        <view class="right"/>
      </view>
    </view>
    <slot></slot>
  </view>

</template>

<script setup lang="ts">
import { useSchoolStore } from '@/stores';

// 组件props传递，自定义的导航头部栏这里定义了两种实现 LOCATION 和 TITLE
// LOCATION 只显示学校信息， TITLE 显示标题和操作项
defineProps<{
  type: 'LOCATION' | 'TITLE',
  title?: String,
}>();

// 设备边距安全距离
const { safeAreaInsets } = uni.getSystemInfoSync();

// 选择学校的状态信息
const useSchool = useSchoolStore();

// 回到主页，这里使用的是switchTab，根据官网的描述，不会压到历史栈
const goHome = () => {
  uni.switchTab({ url: '/pages/index/index' })
}

// 返回
const goBack = () => {
  // console.log(getCurrentPages())
  uni.navigateBack();
}

// 跳转到选择学校页面
const goSelectSchool = () => {
  uni.navigateTo({url: '/pages/school/index'})
}

</script>

<style lang="scss">
.navbar {
  display: flex;
  padding-left: 10upx;
  padding-right: 10upx;
  .school-location {
    display: flex;
    align-items: center;
    color: #6a6a6a;
    font-size: $uni-font-size-base;
    padding-top: 10upx;
  }
  .title-with-operation {
    display: flex;
    flex: 1;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      color: #EDEDED;
      .left-container {
        display: flex;
        align-items: center;
        border: 1upx solid;
        border-radius: 40upx;
        padding: 5upx 10upx;
        background-color: rgba(0, 0, 0, 0.1);
        .splider {
          margin-left: 20upx;
          margin-right: 20upx;
        }
      }
    }
    .title {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #111111;
      font-size: $uni-font-size-lg;
    }
    .right {
      flex: 1;
    }
  }
}
</style>