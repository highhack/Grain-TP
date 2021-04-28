import {authApi} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'


export type InitialStateAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState: InitialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateAuthType = initialState, action: ActionsType): InitialStateAuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
        type: SET_AUTH_USER_DATA,
        data: {id, email, login, isAuth}
    } as const)


type ActionsType = ReturnType<typeof setAuthUserData>

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return  authApi.me()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    authApi.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'                   // это из reduxform  стопает сабмит в формочке логина,
                // вторым параметром описываем какая ошибка
                let action = stopSubmit('login', {_error: message})
                dispatch(action)
            }
        })
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer