<template>
  <!-- 用户信息 -->
  <view class="goods-user">
    <!-- 左侧信息 -->
    <view class="left">
      <image class="avatar" src="@/static/images/bg3.png" mode="aspectFill" />
      <view class="user-info">
        <text class="user-name">乌鸦坐飞机</text>
        <text class="user-location">龙卷风摧毁停车场</text>
      </view>
    </view>
    <!-- 右侧预留空间 -->
    <view class="right">
      <uni-tag class="tag" circle size="small" text="优质卖家" type="success" />
      <uni-tag class="tag" circle size="small" text="一般" type="warning" />
      <uni-tag class="tag" circle size="small" text="他有好东西" type="success" />
      <uni-tag class="tag" circle size="small" text="一般" type="warning" />
      <uni-tag class="tag" circle size="small" text="一般" type="warning" />
      <uni-tag class="tag" circle size="small" text="中" type="success" />
      <uni-tag class="tag" circle size="small" text="垃圾" type="error" />
      <uni-tag class="tag" circle size="small" text="他有好东西" type="success" />
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.goods-user {
  margin: 20upx;
  border-radius: 20upx;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20upx;
  .left {
    display: flex;
    align-items: center;
    .avatar{
      width: 100upx;
      height: 100upx;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      margin-left: 20upx;
      .user-name {
        font-size: 32upx;
        color: #111111;
      }
      .user-location {
        color: #6a6a6a;
      }
    }
  }
  .right {
    width: 200upx;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    .tag {
      margin: 2upx;
    }
  }
}
</style>