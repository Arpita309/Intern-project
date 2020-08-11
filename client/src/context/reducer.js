export default (state,action)=>{
    const{payload,type}=action;
    switch(type){
        case 'GET_USER':
        return {
            ...state,auth:payload
        };
        default:
            return state;
    }
}