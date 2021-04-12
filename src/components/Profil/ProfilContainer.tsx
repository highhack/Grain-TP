import React from 'react';
import Profil from "./Profil";
import {AllAppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {getUserProfil, getUserStatus, updateStatus} from "../../Redux/profilReducer";
import {ProfilType} from "./ProfilInfo/ProfilInfo";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import withAuthComponent from "../../hoc/withAuthComponent";
import {compose} from "redux";




type MapStatePropsType = {
    profil: ProfilType
    status: string
}
type MapDispathPropsType = {
    getUserProfil: (id: string) => void
    getUserStatus: (id: string) => void
    updateStatus:  (status: string) => void
}
export type UsersPropsType = MapStatePropsType & MapDispathPropsType
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & UsersPropsType

class ProfilContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string | number = this.props.match.params.userId
        if (!userId) {
            userId = '11914'
        }
        this.props.getUserProfil(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profil  {...this.props} profil={this.props.profil} status={this.props.status}  updateStatus={this.props.updateStatus}/>
            </div>
        )
    }

}


let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        profil: state.profilPage.profil,
        status: state.profilPage.status
    }
}

// let AuthRedirectComponent = withAuthComponent(ProfilContainer)
// let WithUrlDataProfilContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps,
//     {
//         getUserProfil
//     })(WithUrlDataProfilContainer)

export  default  compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfil, getUserStatus, updateStatus}),
    withRouter,
    withAuthComponent
)(ProfilContainer);

