import React from "react";
import s from "./Sidebar.module.css";
import {SidebarPropsType} from "./SidebarContainer";
import SidebarData from "./SidebarData/SidebarData";




export const Sidebar = (props: SidebarPropsType) => {

    let FriendsElement = props.sidebar.friends.map((p: {id: number, name: string, img: string}) => <SidebarData key={p.id} id={p.id} name={p.name} img={p.img} />)

    return (
        <div className={s.sidebar}>
            {FriendsElement}
        </div>
    )
}

export default Sidebar

