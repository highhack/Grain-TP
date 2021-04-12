import React from 'react';
import {
    addPostActionCreator,
    InitialStatePostType,
    updateNewPostTextActionCreator
} from "../../../Redux/profilReducer";
import {Dispatch} from "redux";
import {AllAppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

// type PropsType = {
//     store: Store
// }
//const MyPostsContainer = (props: PropsType) => {
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())                                                                                                    //функция которая сидит в state (addPost) и добавляет пост после нажатия на кнопку и перерисовывает
//     }                                                                                                                        // props.updateNewPost('')      функция обновляет данные в state и перерисовывает пустую строку (перенесли это действие в state
//     let onPostChange = (text: string) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)                                                                                    //функция которая сидит в state и обновляет данные при написании текста textarea
//     }
//return (
//        <MyPosts updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={state.profilPage.posts}
//                 newPostText={state.profilPage.newPostText} />
//     )};

export type ProfilPropsType = MapStatePropsType & MapDispathPropsType

type MapStatePropsType = {
    profilPage: InitialStatePostType
}
type MapDispathPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        profilPage: state.profilPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispathPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;