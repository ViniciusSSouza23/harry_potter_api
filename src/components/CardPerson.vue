<template>
  <div class="card-component">
    <div class="card">
      <div class="card-header">
        <div v-if="person.image" :style="`background-image:url(${person.image});`" class="img-card"></div>
        <div v-else :style="`background-image:url(${wophoto})`" class="img-card"></div>
      </div>
      <div class="card-body">
        <h3 class="text-center title">
          {{person.name}}
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import wophoto from "@/assets/img/person/wophoto.jpg";
export default {

  props:{
    person:{},

  },
  data(){
    return{
      wophoto
    }
  }
 
}
</script>
<style lang="scss" scoped>
.card-component{
  .card{
    background: #000003;
    padding: 6px;
  }
  .img-card{
    padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    border-radius: 20px;
  }
  .card-body{
    background: #000003;
    h3{
      background: #000003;
    }
  }
}
</style>