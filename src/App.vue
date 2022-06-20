<template>
  <nav-bar />
  <router-view />
</template>

<style lang="scss">
* {
  font-family: 'Barlow', sans-serif;
  background: #19191a;
  color: white;
  .title{
    font-family: 'Dancing Script', cursive;
  }
}
</style>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
