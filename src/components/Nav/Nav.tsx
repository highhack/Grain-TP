import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';
import SidebarContainer from "../Sidebar/SidebarContainer";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profil' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messeges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/Friends' activeClassName={s.active}><h3>FRIENDS</h3></NavLink>
                <SidebarContainer/>
            </div>
        </nav>
    )
}

export default Nav