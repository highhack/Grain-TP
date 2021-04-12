import {usersApi} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW_SUCCESS = 'FOLLOW-SUCCESS'; const UNFOLLOW_SUCCESS = 'UNFOLLOW-SUCCESS'; const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'; const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'; const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: {
        city: string,
        country: string
    }

    photos: {
        small: string | null,
        large: string | null
    }
}
export type InitialStateUsersType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: InitialStateUsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsType): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:                                    // отрисовать полоьзователей
            return {...state, users: [...action.newUsers]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
            case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
            case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
            case TOGGLE_IS_FOLLOWING_PROGRESS:              // блокировка кнопки на время действия зафолоится (конкретной кнопки id)
            return {
                ...state,
                followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)}
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW_SUCCESS, userID} as const)
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW_SUCCESS, userID} as const)
export const setUsers = (newUsers: Array<UsersType>) => ({type: SET_USERS, newUsers} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)
type ActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize)   // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            // {withCredentials: true})
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))

            })
    }
} // санка
export const unfollow = ( userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.deleteFollow(userId)    //axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
            //     {
            //         withCredentials: true,
            //         headers: {
            //             'API-KEY': 'fe02794e-87fe-4fe8-ada5-f6fa7d443c83'
            //         }
            //     })
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}                                  // санка
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.postFollow(userId)    //axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
            //     {
            //         withCredentials: true,
            //         headers: {
            //             'API-KEY': 'fe02794e-87fe-4fe8-ada5-f6fa7d443c83'
            //         }
            //     })
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}                                     // санка



export default usersReducer