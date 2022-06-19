import actions from "./actions";

export default{
  namespaced: true,
  state: ()=>({
   personhouse: []
  }),
  mutations:{
    setPersonHouse(state, house) {
      state.personhouse = house;
    },
  },
  actions
}