import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likecount: string
}


const Post = (props: PropsType) => {
    return (

        <div className={s.itemm}>
            <img  src='https://topmsg.ru/wp-content/uploads/voin-v-chernom-kostyume.jpg' />
             { props.message }
            <div>
                <span> like </span> {props.likecount}
            </div>
        </div>

    )
};

export default Post;