import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likecount: string
}


const Post = (props: PropsType) => {
    return (

        <div className={s.itemm}>
           <div className={s.textarea}>
               <img  src='https://topmsg.ru/wp-content/uploads/voin-v-chernom-kostyume.jpg' />
               <div className={s.message}>{ props.message }</div>
           </div>
            <div className={s.likes}>
                <div> Likes </div>
                {props.likecount}
            </div>
        </div>

    )
};

export default Post;