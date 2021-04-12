import s from "../Sidebar.module.css";
import React from "react"
import {FriendType} from "../../../Redux/sidebarReducer";

const SidebarData = (props: FriendType) => {
return (
<div className={s.friend}>
    <img className={s.img} src={props.img}/>
    <div>{props.name}</div>
</div>
)}

export default SidebarData