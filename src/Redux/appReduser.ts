import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";
const INITIALIZED_SUCCSESS = 'INITIALIZED-SUCCSESSFULY'


export type InitialStateAuthType = {
    initialized: boolean
}
let initialState: InitialStateAuthType = {
    initialized: false
}

const appReducer = (state: InitialStateAuthType = initialState, action: ActionsType): InitialStateAuthType => {
    switch (action.type) {
        case INITIALIZED_SUCCSESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}


export const initializedSuccsess = () =>
    ({type: INITIALIZED_SUCCSESS} as const)


type ActionsType = ReturnType<typeof initializedSuccsess>

export const initializeApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccsess())
        })

}


export default appReducer