import axios from 'axios'; 
export const actionConstants = {
    GET_REQUEST : 'GET_REQUEST',
    GET_SUCCESS : 'GET_SUCCESS',
    GET_ERROR : 'GET_ERROR',
    GET_REJECT : 'GET_REJECT',
    GET_PROGRESS : 'GET_PROGRESS',
    GET_SETLE: 'GET_SETLE'
}
export const getRequest = ()=>({
    type: actionConstants.GET_REQUEST,
    payload: {
        isLoading: true
    }
})
export const getSuccess = (res)=>({
    type: actionConstants.GET_SUCCESS,
    payload: {
        isLoading: false,
        data: res
    }
})
export const getError = (err)=> ({
    type: actionConstants.GET_ERROR,
    payload: {
        isLoading: false,
        isError: true,
        err: err
    }
})
export const reject = (id)=> ({
    type: actionConstants.GET_REJECT,
    payload: {
        id:id
    }
})
export const progress = (id)=> ({
    type: actionConstants.GET_PROGRESS,
    payload: {
        id:id
    }
})
export const settle = (id)=> ({
    type: actionConstants.GET_SETLE,
    payload: {
        id:id
    }
})
export const getData = (config)=> (dispatch) => {
    dispatch(getRequest());
    axios(config)
    .then((res)=>{
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getError(err))
    })
}