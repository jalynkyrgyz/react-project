import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/Api"

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA"

const GET_CAPTHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTHA_URL_SUCCESS"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null    
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // isAuth: true             
            }   
        case GET_CAPTHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }     
        default:
            return state
    }    
}

export const setAuthUserData = (userId, email, login, isAuth)=> ({
    type: SET_USER_DATA, payload:
     {userId, email, login, isAuth} 
})

export const getCaptchaUrlSuccess = (captchaUrl)=> ({
    type: GET_CAPTHA_URL_SUCCESS, payload: {captchaUrl} 
})


export const getAuthUserData = ()=> async (dispatch) => {
  const response = await authAPI.me()        
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
  }         
} 

export const login = (email, password, rememberMe)=> async(dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)          
  if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {

    if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}))
    }    
}

export const getCaptchaUrl = ()=> async(dispatch) => {
    const response = await securityAPI.getCaptchaUrl()  
    const captchaUrl = response.data.url    
      
          dispatch(getCaptchaUrlSuccess(captchaUrl))
}    



export const logout = ()=> async(dispatch) => {
    const response = await authAPI.logout()       
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }      
}
export default authReducer