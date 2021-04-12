import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'

type PropsType = {
    login: string | null
    isAuth: boolean
}
const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img src='https://img1.pnghut.com/24/13/23/GCM7vZjvN9/grass-leaf-ecosystem-environmental-science-green.jpg'
                 alt='backfone'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header