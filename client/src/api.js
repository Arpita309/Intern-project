import axios from 'axios'
const base_url='http://localhost:4000'

export  function ApiGet(url){
     
     return axios.get(`${base_url}/${url}`,{withCredentials:true})
}
export  function ApiPost(url,payload){
     
     return axios.post(`${base_url}/${url}`,payload,{withCredentials:true})
}
export  function ApiPut(url,payload){
     
     return axios.put(`${base_url}/${url}`,payload,{withCredentials:true})
}