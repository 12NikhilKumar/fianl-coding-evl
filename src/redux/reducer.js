import {actionConstants} from './action';
const initState = {
    isLoading: false,
    isError : false,
    err : null,
    data : []
}
export const reducer = (state=initState,action)=>{
    switch(action.type){
        case  actionConstants.GET_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }
        case actionConstants.GET_SUCCESS : {
            console.log(action.payload.data)
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : action.payload.data
            }
        }
        case actionConstants.GET_ERROR : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                err : action.payload.err
            }
        }
        case actionConstants.GET_REJECT : {
            return {
                ...state,
                data : state.data.map((item)=>item.id === action.payload.id ? {...item,status: "rejected"} :item)
            }
        }
        case actionConstants.GET_PROGRESS : {
            return {
                ...state,
                data : state.data.map((item)=>item.id === action.payload.id ? {...item,status: "inprogress"} :item)
            }
        }
        case actionConstants.GET_SETLE : {
            return {
                ...state,
                data : state.data.map((item)=>item.id === action.payload.id ? {...item,status: "setteld"} :item)
            }
        }
        default : {
            return state
        }
    }
}