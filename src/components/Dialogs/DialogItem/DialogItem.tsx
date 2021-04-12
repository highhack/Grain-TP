import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

export type PropsType = {
    id: number
    name: string
    img: string
}

const DialogItem = (props: PropsType) => {
    return (
        <div className={s.dialog }>
            <img src={props.img} />
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
};


export default DialogItem;