import React,{createContext,useReducer,useEffect} from 'react'
import axios from 'axios'
import AuthReducer from './reducer'
import {ApiGet} from '../api'
import App from '../App'
const AuthContext=createContext('default');
export const AuthState=(props)=>{
    let initialState={
        auth:{},
        feature:{},
        price:'',weeks:'',
        phase:{}
    }

const[state,dispatch]=useReducer(AuthReducer,initialState)

useEffect(async()=>{
    try{
        let res=await ApiGet('auth/current_user')
        let {data}=res;
        dispatch({type:'GET_USER',payload:data});
    }
    catch(error){
        console.error(error);
    }
},state)
const getFeature=(value)=>{
    console.log(value)
     dispatch({type:'GET_SELECTEDFEATURE',payload:value})
}
const setPrice=(value)=>{
    console.log(value)
    dispatch({type:'GET_PRICE',payload:value})
}
const setWeeks=(value)=>{
    console.log(value)
    dispatch({type:'GET_WEEKS',payload:value})
}
const setPhase=(value)=>{
    dispatch({type:'GET_PHASE',payload:value})
}
return(
    <AuthContext.Provider
    value={{
        auth:state,
        feature:state.feature,
        getFeature:getFeature,
        setPrice:setPrice,
        setWeeks:setWeeks,
        price:state.price,
        weeks:state.weeks,
        phase:state.phase,
        setPhase:setPhase
        
    }}>
        {props.children}
    </AuthContext.Provider>
)
}
export default AuthContext;