import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/ActionsTypes";

const initState= {
    user: null,
    isAuth: false,
    msg: null
}

const authReducer=(state=initState, {type, payload})=> {
    switch(type) {
        case REGISTER_USER:
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true,
                msg: payload.msg,
                ...payload
            }
        
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                user: null,
            }
            default:
                return state;
        
    }
}

export default authReducer;