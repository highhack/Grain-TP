import {ProfilType} from "../components/Profil/ProfilInfo/ProfilInfo";
import {profileApi, usersApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFIL = 'SET-USER-PROFIL'
const SET_USER_STATUS = 'SET-USER-STATUS'


export type PostType = {
    message: string
    id: number
    likecount: string
}

export type InitialStatePostType = {
    posts: Array<PostType>
    // newPostText: string
    profil: ProfilType
    status: string
}

let initialState: InitialStatePostType = {
    posts: [
        {message: 'Hi, how are you?', id: 1, likecount: "15"},
        {message: "It's my first post", id: 2, likecount: "16"},
        {message: "blablabla", id: 3, likecount: "11"}
    ],
    // newPostText: 'it-kamasutra',
    profil: null,
    status: ''

}

const profilReducer = (state: InitialStatePostType = initialState, action: ActionsType): InitialStatePostType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                // newPostText: '',
                posts: [...state.posts, {id: 4, message: action.newPostText, likecount: '0'}]
            }
        // case UPDATE_NEW_POST:
        //     return {
        //         ...state,
        //         newPostText: action.text
        //     }
        case SET_USER_PROFIL:
            return {
                ...state,
                profil: action.profil
            }
            case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfil = (profil: ProfilType) => ({type: SET_USER_PROFIL, profil} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
// export const updateNewPostTextActionCreator = (text: string) =>
//     ({type: UPDATE_NEW_POST, text} as const)
type ActionsType =
    | ReturnType<typeof addPostActionCreator>
    // | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfil>
    | ReturnType<typeof setUserStatus>

export const getUserProfil = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfil(response.data))
            })
    }
}    //санка

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
                }
            })

    }
}


export default profilReducer