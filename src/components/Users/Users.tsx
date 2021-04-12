import React, {useState} from "react";
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from 'react-router-dom'
import {usersApi} from "../../api/api";

type PropsType = {
    setCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onChangeNumber: (pageNumber: number) => void
    followingInProgress: number[]
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void

}

const Users = (props: PropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let [currentPages, setCurrentPages] = useState(pages.slice(0, 10))

    const ChangePagesToRight = () => {
        currentPages = pages.slice(currentPages[0] + 9, currentPages[0] + 19)
        setCurrentPages(currentPages)
        props.onChangeNumber(currentPages[0])
    }
    const ChangePagesToLeft = () => {
        currentPages = pages.slice(currentPages[0] - 11, currentPages[0] - 1)
        setCurrentPages(currentPages)
        props.onChangeNumber(currentPages[0])
    }


    return <div>
        <div>
            <button onClick={ChangePagesToLeft}>left</button>
            {currentPages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => props.onChangeNumber(p)}>{p} </span>
            })}
            <button onClick={ChangePagesToRight}>right</button>
        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <div>
                    <NavLink to={'/profil/' + u.id}>
                        < img
                            src={u.photos.small !== null ? u.photos.small : "https://i.pinimg.com/originals/bd/bf/d0/bdbfd0d90f12604b1538e2049f1c981c.jpg"}
                            className={s.img}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)
                            // props.toggleFollowingInProgress(true, u.id)
                            // usersApi.deleteFollow(u.id)    //axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            //     //     {
                            //     //         withCredentials: true,
                            //     //         headers: {
                            //     //             'API-KEY': 'fe02794e-87fe-4fe8-ada5-f6fa7d443c83'
                            //     //         }
                            //     //     })
                            //     .then(data => {
                            //         if (data.resultCode === 0) {
                            //             props.unfollow(u.id)
                            //         }
                            //         props.toggleFollowingInProgress(false, u.id)
                            //     })
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.follow(u.id)
                            // props.toggleFollowingInProgress(true, u.id)
                            // usersApi.postFollow(u.id)    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            //     //     {
                            //     //         withCredentials: true,
                            //     //         headers: {
                            //     //             'API-KEY': 'fe02794e-87fe-4fe8-ada5-f6fa7d443c83'
                            //     //         }
                            //     //     })
                            //     .then(data => {
                            //         if (data.resultCode === 0) {
                            //             props.follow(u.id)
                            //         }
                            //         props.toggleFollowingInProgress(false, u.id)
                            //     })
                        }>Follow</button>
                    }
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
        )}
    </div>
}


export default Users