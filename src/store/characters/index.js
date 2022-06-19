import actions from "./actions";

export default{
  namespaced: true,
  state: ()=>({
    students: [],
    staff: [],
    allperson: [],
  }),
  mutations:{
    setStudents(state, students) {
      state.students = students;
    },
    setStaff (state, staff){
      state.staff = staff;
    },
    setAllperson(state, allperson){
      state.allperson = allperson;
    }
  },
  actions
}