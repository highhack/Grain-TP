import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {ProfilPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import buttons from './../../../styles/Butttons.module.css'



const MyPosts = (props: ProfilPropsType) => {
    let PostsElements = props.profilPage.posts.map(p => <Post key={p.id} message={p.message} likecount={p.likecount}/>)
    // let onAddPost = () => {
    //     props.addPost()                                                                                                  //функция которая сидит в state (addPost) и добавляет пост после нажатия на кнопку и перерисовывает
    // }                                                                                                                        // props.updateNewPost('')      функция обновляет данные в state и перерисовывает пустую строку (перенесли это действие в state
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.updateNewPostText(text)                                                                                    //функция которая сидит в state и обновляет данные при написании текста textarea
    // }

    let addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }
    return (
        <div className={s.mypost}>
            <h3>My posts</h3>
            <ReduxAddPostForm  onSubmit={addNewPost}/>
            {/*<div>*/}
            {/*    <textarea onChange={onPostChange} value={props.profilPage.newPostText}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onAddPost}>Add post</button>*/}
            {/*</div>*/}
            <div>
            {PostsElements}
            </div>
        </div>
    )
};

const maxLength = maxLengthCreator(30)

const AddPostForm: React.FC<InjectedFormProps<HTMLTextAreaElement>> = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.form}>
        <div>
            <Field component={TextArea} name='newPostText' placeholder='enter your message' validate={[required, maxLength]}/>
        </div>
        <div>
            <button className={buttons.button1}>Send</button>
        </div>
    </form>
}

const ReduxAddPostForm = reduxForm<HTMLTextAreaElement>({form: 'AddPostForm'})(AddPostForm)

export default MyPosts;