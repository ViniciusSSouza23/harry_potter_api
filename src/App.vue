<template>
  <nav-bar />
  <router-view />
  <footer class="py-5 mt-4">
    <div class="container text-center">
      <a class="text-white" href="https://www.linkedin.com/in/vinicius-souza-b89719141/">Desenvolvido por Vinicius Souza</a>
    </div>
  </footer>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Barlow', sans-serif;
  background: #19191a;
  color: white;
  .title{
    font-family: 'Dancing Script', cursive;
  }
  .btn{
    &:focus{
      box-shadow: none;
      border: none;
    }
  }
  .line {
    border: 1px solid goldenrod;
    
  }
  
  footer{
    background: #131212;
    border: 1px solid black;
    .container{
      background: #131212;
    }
    a{
      color: white;
      text-decoration: none;
      font-family: 'Dancing Script', cursive;
      font-weight: 700;
      background: #131212;
      transition: filter 0.5s;
      &:hover{
        text-decoration: underline;
        filter: brightness(120%);
      }
    }
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
