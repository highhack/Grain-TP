import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AllAppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AllAppStateType): mapStateToPropsForRedirect => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthComponent <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsForRedirect) {
        let{isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthComponent