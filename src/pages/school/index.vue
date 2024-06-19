<template>
  <view class="content">
    <!-- 头部导航栏 -->
    <MyNavbar type="TITLE" title="选择学校"/>

    <!-- 搜索栏 -->
    <uni-search-bar radius="100" placeholder="请输入要搜索的学校" @confirm="onConfirm" />

    <!-- 检索完成的数据列表 -->
    <uni-list :border="false">
      <uni-list-item clickable @click="selectSchool(item)" v-for="(item, index) in schools" :key="index" :title="item.name" note="" />
    </uni-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyNavbar from '@/components/MyNavbar.vue'
import { type School, useSchoolStore } from '@/stores';

const useSchool = useSchoolStore();

// 学校列表
const schools = ref<School[]>();

// 搜索栏提交
const onConfirm = (e: {value: string | number}) => {
  // console.log(e);
  if(!e.value || e.value === '') {
    uni.showToast({
      icon: 'none',
      title: '请输入搜索内容',
    });
    return;
  }

  // 查接口数据
  schools.value = getSchools(e.value as string);
}

// 查学校数据
const getSchools = (filter: string) => {
  let schools: School[] = [
    {id: "1", name: "北京大学（南校区）", area: "南校区"},
    {id: "2", name: "清华大学（北校区）", area: "北校区"},
    {id: "3", name: "北京邮电大学（东校区）", area: "东校区"},
    {id: "4", name: "布鲁斯盖大学（山东校区）", area: "山东校区"},
  ];

  let result = new Array<School>;

  schools.forEach(item => {
    if(item.name.indexOf(filter) > -1) {
      result.push(item);
    }
  });

  return result;
}

// 选择学校，完事去主页
const selectSchool = (school: School) => {
  useSchool.setCurSchool({...school});
  uni.switchTab({url: '/pages/index/index'});
}
</script>

<style lang="scss">
.content {
  padding: 5upx;
}
</style>
