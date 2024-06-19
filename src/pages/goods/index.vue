<template>
  <view class="goods-page">
    <!-- 导航 -->
    <MyNavbar type="TITLE" title="详情"/>

    <!-- 页面内容 -->
    <scroll-view enable-back-to-top class="scroll-view" scroll-y >

      <!-- 商品图 -->
      <MyGoodsPicture />

      <!-- 用户信息 -->
      <MyGoodsUser />

      <!-- 商品信息描述 -->
      <MyGoodsDescribe/>

      <!-- 留言 -->

    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import MyGoodsPicture from './component/MyGoodsPicture.vue';
import MyGoodsUser from './component/MyGoodsUser.vue';
import MyGoodsDescribe from './component/MyGoodsDescribe.vue';

// 查询参数
const query = defineProps<{
  id: string
}>()

// 页面加载完成触发
onLoad(() => {
  uni.showToast({"icon": "none", "title": "带过来的查询参数是："+query.id})
});

</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
}
.goods-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5upx;
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>