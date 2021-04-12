import React from 'react';
import s from './Profil.module.css';
import ProfilInfo, {ProfilInfoPropsType} from './ProfilInfo/ProfilInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profil = (props:ProfilInfoPropsType) => {
    return (
        <div className={s.content}>
            <ProfilInfo profil={props.profil} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profil;