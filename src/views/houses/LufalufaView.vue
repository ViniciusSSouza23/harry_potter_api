<template>
  <div class="corvinal-view">
    <div class="container">
      <h2 class="text-center title">Personagens da casa Corvinal</h2>
      <div class="line my-4"></div>
      <div class="row">
        <div
          v-for="(person, index) in personhouse.slice(0, inset)"
          :key="index"
          class="col-lg-3 mb-4"
        >
          <card-person :person="person" />
        </div>
      </div>
      <div
        v-if="inset <= personhouse?.length"
        class="row justify-content-center my-3"
      >
        <div class="col-lg-4">
          <button @click="seeMore" class="btn btn-gold w-100">Ver Mais</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardPerson from "@/components/CardPerson.vue";
import { mapState } from "vuex";
export default {
  components: {
    CardPerson,
  },
  data() {
    return {
      loading: false,
      inset: 8,
    };
  },
  computed: {
    ...mapState("house", ["personhouse"]),
  },
  mounted() {
    this.$store.dispatch("house/getHouse", "hufflepuff").finally(() => {
      this.loading = false;
    });
  },
  methods: {
    seeMore() {
      this.inset = this.inset + 4;
    },
  },
};
</script>
<style lang="scss" scoped>
.corvinal-view {
  .btn-gold {
    background: goldenrod;
    color: white;
    transition: filter 0.4s;
    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>