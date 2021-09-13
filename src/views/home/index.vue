<template>
  <div>
    <keep-alive exclude="mineCode">
    <router-view></router-view>
    </keep-alive>
    <Nav-footer ></Nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import NavFooter from "@/components/NavFooter";
export default {
  name: "home",
  components: {
    NavFooter,
  },
  mounted(){
   
    
  }
};
</script>
<style lang="scss">
.home {
  .sss {
    @include clearfix;
  }
}
</style>
