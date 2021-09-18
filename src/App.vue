<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    let htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName("html")[0];
    htmlDom.style.fontSize = htmlWidth / 30 + "px";
  },
};
</script>
<style lang="scss">
</style>
