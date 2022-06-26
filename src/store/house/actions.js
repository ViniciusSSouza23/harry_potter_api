import axios from "axios"

export default{

  getHouse(context,house){
    return new Promise((resolve,reject)=>{
      axios.get(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
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