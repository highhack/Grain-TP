import React, {RefObject} from 'react';
import s from './ProfilInfo.module.css';
import {setUserStatus, updateStatus} from "../../../Redux/profilReducer";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = ()  => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: any) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    && <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "my status"}</span>
                    </div>}
                {
                    this.state.editMode && <div>
                        <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>

                }
            </div>
        )
    }
}


export default ProfileStatus;