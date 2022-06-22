
<template>
  <div class="student-view">
    <div class="container">
      <h3 class="text-center title py-3">
        Aqui você encontra informações sobre todos os estudantes de Hogowarts
      </h3>
      <div class="line mb-4"></div>
      <div class="row" v-if="students">
        <div v-for="(student, index) in students.slice(0,inset)" :key="index" class="col-lg-3 mb-4">
          <card-person :person="student"/>
        </div>
      </div>
    <div v-if="inset<= students?.length" class="row justify-content-center my-3">
      <div class="col-lg-4">
        <button @click="seeMore" class="btn btn-gold w-100">Ver Mais</button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import CardPerson from "@/components/CardPerson.vue";
import { mapState } from 'vuex';
export default {
  components: {
    CardPerson,
  },
  data(){
    return{
      loading: false,
      inset: 8
    }
  },
  computed:{
    ...mapState("characters",["students"])
  },
  mounted(){
    this.$store.dispatch("characters/getStudents")
  },
  methods:{
    seeMore(){
      this.inset = this.inset+8;
    }
  }
};
</script>
<style lang="scss" scoped>
.student-view{
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
