import {AuthAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const SET_USER_DATA = 'SET_USER_DATA';

let initinalState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state = initinalState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
        }

        default:
            return state;
    }
}


export const setAuthUserData = (userId,email,login,isAuth) => {
    return {
        type: SET_USER_DATA,payload: {userId,email,login,isAuth}
    }
}

export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me().then(response => {
        if(response.data.resultCode === 0){
            let {id,login,email} = response.data.data;
            dispatch(setAuthUserData(id,email,login,true));
        }
    })
}


export const login = (email,password,rememberMe) => (dispatch) => {
    AuthAPI.login(email,password,rememberMe).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData());
        }
    })
}

export const logout = () => (dispatch) => {
    AuthAPI.logout().then(response => {
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false));
        }
    })
}



export default authReducer;