import {addPostActionCreator, InitialStatePostType} from "../../../Redux/profilReducer";
import {Dispatch} from "redux";
import {AllAppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


export type ProfilPropsType = MapStatePropsType & MapDispathPropsType

type MapStatePropsType = {
    profilPage: InitialStatePostType
}
type MapDispathPropsType = {
    addPost: (newPostText: string) => void
    // updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        profilPage: state.profilPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispathPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
        // updateNewPostText: (text: string) => {
        //     dispatch(updateNewPostTextActionCreator(text))
        // }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;