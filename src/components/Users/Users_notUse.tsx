import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import  axios from "axios";





const Users_notUse = (props: UsersPropsType) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resolve =>  {props.setUsers(resolve.data.items)})
    }}

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        < img src={u.photos.small !== null ? u.photos.small : ""} className={s.img}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
};


