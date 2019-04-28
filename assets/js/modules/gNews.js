import axios from 'axios';
const apiKey = "0755655e274647799acbf14048874587";

export default axios.create({
    method:"get",
    baseURL:"https://newsapi.org/v2",
    params:{
      pageSize:6
    },
    headers:{
       Authorization:apiKey
    }
});
