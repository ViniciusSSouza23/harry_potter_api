import axios from "axios";


window.axios = axios;
window.axios.defaults.baseURL = "http://hp-api.herokuapp.com/api";
window.axios.defaults.timeout = 1000*60*5;