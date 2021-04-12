import {DialogType, MessegeType} from "./redux-store";


const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const ADD_MASSAGE = 'ADD-MASSAGE'

export type InitialStateDialogType = {
    dialogs: Array<DialogType>
    messages: Array<MessegeType>
    newMassageBody: string
}

let initialState: InitialStateDialogType = {
    dialogs: [
        {
            name: 'Dima',
            id: 1,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Andrey',
            id: 2,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Alex',
            id: 3,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Sveta',
            id: 4,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Vova',
            id: 5,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Dora',
            id: 6,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
        {
            name: 'Oleg',
            id: 7,
            img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'
        },
    ],
    messages: [
        {message: 'hi', id: 1},
        {message: 'good morning', id: 2},
        {message: 'hello', id: 3},
        {message: 'yo', id: 4},
        {message: 'How is going', id: 5},
        {message: 'Good bay', id: 6},
        {message: 'good night', id: 7}
    ],
    newMassageBody: 'write here'
}

const dialogReducer = (state: InitialStateDialogType = initialState, action: ActionsType): InitialStateDialogType => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            return {
                ...state,
                newMassageBody: action.body
            }
        case ADD_MASSAGE:
            return {
                ...state,
                newMassageBody: '',
                messages: [...state.messages, {message: state.newMassageBody, id: 8}]
            }
        default:
            return state
    }
}

export const addMassageActionCreator = () => ({type: ADD_MASSAGE} as const)
export const updateNewMassageBodyActionCreator = (text: string) =>
    ({type: UPDATE_NEW_MASSAGE_BODY, body: text} as const)
type ActionsType =
    | ReturnType<typeof addMassageActionCreator>
    | ReturnType<typeof updateNewMassageBodyActionCreator>


export default dialogReducer