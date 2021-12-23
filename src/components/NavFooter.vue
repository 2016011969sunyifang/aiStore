<template>
  <div>
    <van-tabbar
      v-model="active"
      route
      active-color="#00C17B"
      inactive-color="#555555"
      :placeholder ="true"
    >
      <van-tabbar-item replace to="/index" icon="home-o">首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/share" icon="apps-o"
        >娱乐</van-tabbar-item
      >
      <van-tabbar-item replace to="/notice" icon="notes-o">晴天日记</van-tabbar-item>
      <van-tabbar-item replace to="/notice" icon="notes-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
