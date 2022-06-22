<template>
  <div class="allcharacters-view">
    <div class="container">
    <h2 class="text-center title py-4">Veja abaixo todos os personagens do mundo de Harry Potter</h2>
    <div class="line mb-4"></div>
    <div class="row" v-if="allperson">
      <div v-for="(person,index) in allperson.slice(0,inset)" :key="index" class="col-lg-3">
        <card-person :person="person" class="mb-5" />
      </div>
    </div>
    
    <div v-if="inset<= allperson.length" class="row justify-content-center my-3">
      <div class="col-lg-4">
        <button @click="seeMore" class="btn btn-gold w-100">Ver Mais</button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import CardPerson from "@/components/CardPerson.vue";
import { mapState } from 'vuex'
export default {
  data(){
    return{
      loading: false,
      inset: 8

    }
  },
  components:{
    CardPerson
  },
  computed:{
    ...mapState("characters",["allperson"])
  },
  mounted(){
    this.$store.dispatch("characters/getAll").finally(()=>{
      this.loading=false;
    })
  },
  methods:{
    seeMore(){
      this.inset = this.inset+4;
    }
  }
 
}
</script>
<style lang="scss" scoped>
.allcharacters-view{
  .btn-gold{
    background: goldenrod;
    color: white;
    transition: filter 0.4s;
    &:hover{
      filter: brightness(80%);
    }
  }
}
</style>