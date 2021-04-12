import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import profilReducer from "./profilReducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export type DialogType = {
    name: string
    id: number
    img: string
}
export type MessegeType = {
    message: string
    id: number
}


export const rootReducer = combineReducers({
    dialogPage: dialogReducer,
    profilPage: profilReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type AllAppStateType = ReturnType<typeof rootReducer>
export  default store
