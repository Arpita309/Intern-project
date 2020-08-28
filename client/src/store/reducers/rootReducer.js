let initialState={
    auth:[],
    feature:[],
    price:'',weeks:'',
    phase:{},
    productType:''
}
export default (state=initialState,action)=>{
    const{payload,type}=action;
    switch(type){
        case 'GET_USER':
        return {
            ...state,auth:payload
        };
        case 'GET_SELECTEDFEATURE':
        return{
            ...state,feature:[...state.feature,payload]
        };
        case 'GET_PRICE':
        return{
            ...state,price:payload
        };
        case 'GET_WEEKS':
        return{
            ...state,weeks:payload
        };
        case 'GET_PHASE':
        return{
            ...state,phase:payload
        };
        case 'Product_Type':
            return{
                ...state,productType:payload
            }
        default:
            return state;
    }
}