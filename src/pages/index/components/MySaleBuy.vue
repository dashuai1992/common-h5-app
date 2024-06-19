<template>
  <view class="my-sale-buy">
    <!-- 卖 -->
    <navigator url="/pages/index/index" class="sale" >
      <view class="sale-buy-wrapper">
        <uni-icons class="icon" type="color" color="" size="24"/>
        <text class="text">卖 ></text>
      </view>
    </navigator>

    <!-- 买 -->
    <navigator url="/pages/index/index" class="buy" >
      <view class="sale-buy-wrapper">
        <uni-icons class="icon" type="color" color="" size="24"/>
        <text class="text">买 ></text>
      </view>
    </navigator>
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.my-sale-buy {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20upx;
  border-radius: 20upx;
  background-color: #f5f5f5;
  .sale {
    flex: 1;
    padding: 20upx 20upx;
  }
  .buy {
    flex: 1;
    padding: 20upx 20upx;
  }
}
.sale-buy-wrapper {
  border-radius: 20upx;
  height: 130upx;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40upx;
  color: #111111;
  font-size: 32upx;
}
</style>