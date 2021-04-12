import {authApi} from "../api/api";
import {Dispatch} from "redux";

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
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null) =>
    ({
        type: SET_AUTH_USER_DATA,
        data: {id, email, login}
    } as const)


type ActionsType = ReturnType<typeof setAuthUserData>

export const getAuthUserData = () =>  {
    return (dispatch: Dispatch) => {
        authApi.me()
            // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer