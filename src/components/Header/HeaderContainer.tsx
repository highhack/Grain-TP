import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {AllAppStateType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/authReducer";

export type PropsType = MapStatePropsType & MapDispathPropsType


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispathPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            {...this.props}
            login={this.props.login}
            isAuth={this.props.isAuth}/>

    }
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)