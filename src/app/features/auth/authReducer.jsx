import { LOGIN_USER, SIGN_OUT_USER } from "./authConstant";
import { createReducer } from "../../common/util/reducerUtil";

const intialState = {
    currentUser: {}
}

export const loginUser = (state,payload) => {
    return{
        ...state,
        authenticated: true,
        currentUser: payload.creds.email
    }
}

export const signOutUser = (state, payload) => {
    return {
        ...state,
        authenticated: false,
        currentUser: {}
    }
}

export default createReducer(intialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUser
})