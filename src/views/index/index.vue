<template>
  <div class="index">
    <div class="index-header">
      <Index-swiper/>
    </div>
  </div>
</template>

<script>
import IndexSwiper from './components/indexSwiper.vue'
export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {IndexSwiper },
  methods: {
    /**
     * 获取轮播图图片列表
     * @method 
     * @param {null}
     * @return {null}
     */
    getAds(){
      this.$api.indexs.getAds().then(res=>{
        console.log(res);
      })
    }
  },
  mounted() {
this.getAds();
  },
  computed: {
  },
};
</script>
<style scoped lang="scss">
</style>
