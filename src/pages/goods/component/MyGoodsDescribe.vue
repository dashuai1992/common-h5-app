<template>
  <!-- 商品信息描述 -->
  <view class="goods-describe">

    <!-- 标题 -->
    <view class="describe-title">
      <text class="title-text">
        南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了
      </text>
      <view class="goods-share">
        <uni-icons type="redo" size="24" />
        <text>分享</text>
      </view>
    </view>

    <text class="goods-price">￥200</text>

    <!-- 描述文字 -->
    <view class="describe-text">
      <text >
        南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了南来的北往的，都来看一看了啊，这里有好东西，赶早不赶晚喽，快来看看了。
      </text>
    </view>

    <!-- 属性 -->
    <view class="goods-property" v-for="(item, index) in goodsProp" :key="index">
      <text class="property-key">{{ item.key }}</text>
      <text class="property-value">{{ item.value }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const goodsProp = ref([
  {key: "成色", value: "全新"},
  {key: "商品分类", value: "休闲商品-居家"},
  {key: "商品位置", value: "北京大学（北校区）"},
  {key: "交易方式", value: "自提"},
  {key: "发布时间", value: "2024-04-09 00:53:29"},
]);
</script>

<style lang="scss">
.goods-describe {
  margin: 20upx;
  background-color: #fff;
  border-radius: 20upx;
  padding: 20upx;
  .describe-title {
    display: flex;
    justify-content: space-between;
    .title-text {
      font-size: 32upx;
      color: #111111;
    }
    .goods-share {
      width: 200upx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 20upx;
    }
  }
  .goods-price {
    font-size: 38upx;
    color: #e43d33;
    font-weight: bold;
    margin-top: 20upx;
  }
  .describe-text {
    margin: 20upx 0;
    font-size: 24upx;
    color: #6a6a6a;
  }
  .goods-property {
    margin-top: 20upx;
    display: flex;
    flex-direction: column;
    .property-key {
      font-size: 26upx;
      color: #6a6a6a;
    }
    .property-value {
      font-size: 28upx;
      color: #111111;
    }
  }
}
</style>