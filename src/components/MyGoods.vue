<template>
  <view class="my-goods">
    <navigator
      :url="`/pages/goods/index?id=${index}`"
      class="my-goods-item"
      v-for="(good, index) in goods"
      :key="index"
    >
      <MyGoodsItem :good="good"/>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import MyGoodsItem from './MyGoodsItem.vue';
import { ref } from 'vue';

const goods = ref(["商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品","商品",]);


</script>

<style lang="scss">
.my-goods {
  margin-top: 10upx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>