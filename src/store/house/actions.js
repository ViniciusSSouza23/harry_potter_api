import axios from "axios"

export default{

  getHouse(context,house){
    return new Promise((resolve,reject)=>{
      axios.get(`/house/${house}`)
      .then(response=>{
        context.commit("setPersonHouse",response.data);
        resolve(response.data);
      })
      .catch(error=>{
        reject(error);
      })
    });
  }
}