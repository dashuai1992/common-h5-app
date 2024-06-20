<template>
  <!-- 商品图 -->
  <view class="goods-picture">
    <view class="goods-picture-container">

      <!-- 图片轮播 -->
      <swiper class="swiper" circular autoplay>
        <swiper-item v-for="(item, index) in images" :key="index">
          <image class="image" @tap="onTapImage(item)" mode="aspectFill" :src="item" />
        </swiper-item>
      </swiper>

      <!-- 详情查看次数 -->
      <view class="view-times">
        <uni-icons type="eye" color="" size="18" />
        <text>{{ viewCount }}浏览</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref(["https://dashuai1992.github.io/common-h5-app/static/images/rust-01-title.jpg","https://dashuai1992.github.io/common-h5-app/static/images/bg3.png"]);

const viewCount = ref(643);

const onTapImage = (url: string) => {
  console.log(url);
  uni.previewImage({
    current: url,
    urls: images.value,
  });
}

</script>

<style lang="scss">
.goods-picture {
  .goods-picture-container {
    position: relative;
    .swiper {
      height: 500rpx;
      .image {
        width: 750upx;
        height: 750upx;
      }
    }
    .view-times {
      position: absolute;
      bottom: 20upx;
      left: 20upx;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 5upx 20upx;
      border-radius: 30upx;
      font-size: 18upx;
    }
  }
}
</style>