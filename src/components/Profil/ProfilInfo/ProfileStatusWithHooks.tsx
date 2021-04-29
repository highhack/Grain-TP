import React, {useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks  = (props: PropsType) => {
 let [editMode, setEditMode ] = useState(true)
 let [status, setStatus ] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)}, [props.status]
    )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const  deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const  onChangeStatus = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus (e.currentTarget.value)
    }

        return (

            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "my status"}</span>
                </div>}
                { editMode && <div>
                        <input onChange={onChangeStatus} autoFocus={true}  onBlur={deactivateEditMode} value={status}/>
                    </div>

                }
            </div>
        )
    }



export default ProfileStatusWithHooks;