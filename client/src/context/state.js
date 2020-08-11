import React,{createContext,useReducer,useEffect} from 'react'
import axios from 'axios'
import AuthReducer from './reducer'
import {ApiGet} from '../api'
import App from '../App'
const AuthContext=createContext();
export const AuthState=(props)=>{
    let initialState={
        auth:{}
    }

const[state,dispatch]=useReducer(AuthReducer,initialState)

useEffect(async()=>{
    try{
        let res=await ApiGet('auth/current_user')
        let {data}=res;
        console.log(data)
        dispatch({type:'GET_USER',payload:data});
    }
    catch(error){
        console.error(error);
    }
},initialState)
return(
    <AuthContext.Provider
    value={{
        auth:state
        
    }}>
        {props.children}
    </AuthContext.Provider>
)
}
export default AuthContext;