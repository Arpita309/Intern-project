export const getFeature=(value)=>{
    console.log(value)
     return(dispatch)=>{
         dispatch({type:'GET_SELECTEDFEATURE',payload:value})}
}
export const setPrice=(value)=>{
    console.log(value)
    return(dispatch)=>{
    dispatch({type:'GET_PRICE',payload:value})}
}
export const setWeeks=(value)=>{
    console.log(value)
    return(dispatch)=>{
    dispatch({type:'GET_WEEKS',payload:value})}
}
export const setPhase=(value)=>{
    return(dispatch)=>{
    dispatch({type:'GET_PHASE',payload:value})}
}
export const setProductType=(value)=>{
    console.log(value)
    return(dispatch)=>{
    dispatch({type:'product_Type',payload:value})}
}