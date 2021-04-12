import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilPropsType} from "./MyPostsContainer";

// export type PostType = {
//     message: string
//     id: number
//     likecount: string
// }
// type PropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     updateNewPostText: (text: string) => void
//     addPost: () => void
// }
const MyPosts = (props: ProfilPropsType) => {
    let PostsElements = props.profilPage.posts.map(p => <Post key={p.id} message={p.message} likecount={p.likecount}/>)
    let onAddPost = () => {
        props.addPost()                                                                                                  //функция которая сидит в state (addPost) и добавляет пост после нажатия на кнопку и перерисовывает
    }                                                                                                                        // props.updateNewPost('')      функция обновляет данные в state и перерисовывает пустую строку (перенесли это действие в state
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)                                                                                    //функция которая сидит в state и обновляет данные при написании текста textarea
    }
    return (
        <div className={s.mypost}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.profilPage.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {PostsElements}
        </div>
    )
};

export default MyPosts;