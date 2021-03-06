import React from 'react';
import {addMassageActionCreator, InitialStateDialogType,} from '../../Redux/dialogReducer';
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {AllAppStateType} from "../../Redux/redux-store";
import {connect} from 'react-redux';
import withAuthComponent from "../../hoc/withAuthComponent";


export type DialogsPropsType = MapStatePropsType & MapDispathPropsType

type MapStatePropsType = {
    dialogPage: InitialStateDialogType

}
type MapDispathPropsType = {
    addMassage: (newMassageBody: string)  => void
    // updateNewMassageBody: (body: string) => void
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

// let mapStateToPropsForRedirect = (state: AllAppStateType): mapStateToPropsForRedirect => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }
// // @ts-ignore
// let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


const mapDispatchToProps = (dispatch: Dispatch): MapDispathPropsType => {
    return {
        addMassage: (newMassageBody: string) => {
            dispatch(addMassageActionCreator(newMassageBody))
        },
        // updateNewMassageBody: (body: string) => {
        //     dispatch(updateNewMassageBodyActionCreator(body))
        // }
    }
}

// export const AuthRedirectComponent = withAuthComponent(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthComponent
)(Dialogs);
export default DialogsContainer;

