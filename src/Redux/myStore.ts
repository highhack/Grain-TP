import React from "react";
// import profilReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profilReducer";
// import dialogReducer, {addMassageActionCreator, updateNewMassageBodyActionCreator} from "./dialogReducer";
// import sidebarReducer from "./sidebarReducer";
//
//  type DialogType = {
//     name: string
//     id: number
//     img: string
// }
//  type MessegeType = {
//     message: string
//     id: number
// }
//  type PostType = {
//     message: string
//     id: number
//     likecount: string
// }
//  type FriendType = {
//     name: string
//     id: number
//     img: string
// }
// export type SidebarType = {
//     friends: Array<FriendType>
// }
// export type ProfilPageType = {
//     posts: Array<PostType>
//     newPostText: string
//
// }
// type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessegeType>
//     newMassageBody: string
// }
//  type StateType = {
//     profilPage: ProfilPageType
//     dialogPage: DialogPageType
//     sidebar: SidebarType
// }
//  type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: () => void
//     updateNewPost: (postText: string) => void
//     addPost: (newPost: PostType) => void
//     subscribe: (observed: (state: StateType) => void) => void
//     dispatch: (action: ActionsTypes) => void
// }
//  type ActionsTypes = (ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
//     ReturnType<typeof addMassageActionCreator> | ReturnType<typeof updateNewMassageBodyActionCreator>)
//
// export const ADD_POST = 'ADD-POST'
// export const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
// export const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
// export const ADD_MASSAGE = 'ADD-MASSAGE'

// let store = {
    // _state: {
    //     profilPage: {
    //         posts: [
    //             {message: 'Hi, how are you?', id: 1, likecount: "15"},
    //             {message: "It's my first post", id: 2, likecount: "16"},
    //             {message: "blablabla", id: 3, likecount: "11"}
    //         ],
    //         newPostText: 'it-kamasutra'
    //     },
    //     dialogPage: {
    //         dialogs: [
    //             {name: 'Dima', id: 1, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Andrey', id: 2, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Alex', id: 3, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Sveta', id: 4, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Vova', id: 5, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Dora', id: 6, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //             {name: 'Oleg', id: 7, img: 'https://image.freepik.com/free-photo/boy-holds-red-flowers-before-his-eyes_1304-4515.jpg'},
    //         ],
    //         messages: [
    //             {message: 'hi', id: 1},
    //             {message: 'good morning', id: 2},
    //             {message: 'hello', id: 3},
    //             {message: 'yo', id: 4},
    //             {message: 'How is going', id: 5},
    //             {message: 'Good bay', id: 6},
    //             {message: 'good night', id: 7}
    //         ],
    //         newMassageBody: 'write here'
    //     },
    //     sidebar: {
    //         friends: [
    //             {name: 'Dima', id: 1, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
    //             {name: 'Dora', id: 2, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
    //             {name: 'Oleg', id: 3, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
    //         ]
    //     }
    //
    // },
  //   _callSubscriber(_state: StateType) {
  //       console.log('state changed')
  //   },
  // getState() {
  //       return this._state
  //   },
  //   subscribe(observed: (state: StateType) => void) {
  //       this._callSubscriber = observed
  //   },
  //   _updateNewPost(postText: string) {
  //       this._state.profilPage.newPostText = postText
  //       this._callSubscriber(this._state)
  //   },
  //   _addPost() {
  //       const newPost: PostType = {
  //           id: 4,
  //           message: store._state.profilPage.newPostText,
  //           likecount: '0'
  //       };
  //       this._state.profilPage.posts.push(newPost)
  //       this._state.profilPage.newPostText = ''                                                                                     // дает  пустую строку
  //       this._callSubscriber(this._state)
  //   },
    // dispatch(action: ActionsTypes) {
    //     this._state = profilReducer(this._state, action)
    //     this._state = dialogReducer(this._state, action)
    //     this._state = sidebarReducer(this._state, action)
    //
    //     this._callSubscriber(this._state)
    //
    //     if (action.type === ADD_POST) {
    //         const newPost: PostType = {
    //             id: 4,
    //             message: store._state.profilPage.newPostText,
    //             likecount: '0'
    //         };
    //         this._state.profilPage.posts.push(newPost)
    //         this._state.profilPage.newPostText = ''                                                                                     // дает  пустую строку
    //         this._callSubscriber(this._state)
    //     } else if (action.type === UPDATE_NEW_POST) {
    //         this._state.profilPage.newPostText = action.postText
    //         this._callSubscriber(this._state)
    //     } else if (action.type === UPDATE_NEW_MASSAGE_BODY) {
    //         this._state.dialogPage.newMassageBody = action.body
    //         this._callSubscriber(this._state)
    //     } else if (action.type === ADD_MASSAGE) {
    //         let body = store._state.dialogPage.newMassageBody
    //         const newMassage = {
    //             message: body,
    //             id: 8
    //         };
    //         this._state.dialogPage.messages.push(newMassage)
    //         this._state.dialogPage.newMassageBody = ''                                                                                     // дает  пустую строку
    //         this._callSubscriber(this._state)
    //     }
    // }
// }




// export default store
//window.store = store