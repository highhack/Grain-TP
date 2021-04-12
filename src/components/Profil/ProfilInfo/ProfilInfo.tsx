import React from 'react';
import s from './ProfilInfo.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfilInfoPropsType = {
    profil: ProfilType
    status: string
    updateStatus: (status: string) => void
}

export type ProfilType = {
    photos: {
        large: string
        small: string
    }
    aboutMe: string
    lookingForAJob: boolean
} | null


const ProfilInfo = (props: ProfilInfoPropsType) => {

    if (props.profil === null) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img id={s.upimage}
                     src='https://www.forestryservices.ie/wp-content/uploads/2019/05/color-conifer-daylight-1179229.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profil.photos.large}/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {props.profil.aboutMe}
            </div>
            <div>
                Job: {props.profil.lookingForAJob
                ? 'Looking for a job'
                : 'Employed'}
            </div>
        </div>
    )
};

export default ProfilInfo;