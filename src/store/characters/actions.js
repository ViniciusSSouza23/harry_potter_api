import axios from "axios";

export default{

  getAll(context){
    return new Promise((resolve,reject)=>{
      axios.get("/characters")
      .then(response=>{
        context.commit("setAllperson",response.data);
        resolve(response.data);
      })
      .catch(error=>{
        reject(error);
      })
    });
  },

  getStaff(context){
    return new Promise((resolve,reject)=>{
      axios.get("/characters/staff")
      .then(response=>{
        context.commit("setStaff", response.data);
        resolve(response.data);
      })
      .catch(error=>{
        reject(error);
      })
    });
  },

  getStudents(context){
    return new Promise((resolve,reject)=>{
      axios.get("/characters/students")
      .then(response=>{
        context.commit("setStudents", response.data);
        resolve(response.data);
      })
      .catch(error=>{
        reject(error);
      })
    });
  }
}