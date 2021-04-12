import {AllAppStateType} from "../../Redux/redux-store";
// import {Dispatch} from "redux";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

export type SidebarPropsType = MapStatePropsType

type FriendType = {
    name: string
    id: number
    img: string
}
type SidebarType = {
    friends: Array<FriendType>
}
type MapStatePropsType = {
    sidebar: SidebarType
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;

// type MapDispathPropsType = {
//     addMassage: () => void
//     updateNewMassageBody: (body: string) => void
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispathPropsType=> {
//     return {
//         addMassage: () => {
//             dispatch(addMassageActionCreator())
//         },
//         updateNewMassageBody: (body: string) => {
//             dispatch(updateNewMassageBodyActionCreator(body))
//         }
//     }
// }