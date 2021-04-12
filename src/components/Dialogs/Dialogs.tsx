import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from 'react-router-dom';


const Dialogs = (props: DialogsPropsType) => {

    let DialogElements = props.dialogPage.dialogs.map((d: {
        img: string; name: string; id: number;
    }) => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let MessegesElements = props.dialogPage.messages.map((m: { message: string }) => <Message message={m.message}/>)
    let onMassageClick = () => {
        props.addMassage()
    }
    let onMasssgeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMassageBody(body)
    }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {DialogElements}
                </div>
                <div className={s.messages}>
                    {MessegesElements}
                </div>
                <div>
                    <textarea onChange={onMasssgeChange} value={props.dialogPage.newMassageBody}/>
                    <button onClick={onMassageClick}>send</button>
                </div>
            </div>
        )

};

export default Dialogs;