import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import buttons from'./../../styles/Butttons.module.css'


const Dialogs = (props: DialogsPropsType) => {

    let DialogElements = props.dialogPage.dialogs.map((d: {
        img: string; name: string; id: number;
    }) => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let MessegesElements = props.dialogPage.messages.map((m: { message: string }) => <Message message={m.message}/>)
    // let onMassageClick = () => {
    //     props.addMassage()
    // }
    // let onMasssgeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.updateNewMassageBody(body)
    // }
    let addNewMessage = (value: any) => {
        props.addMassage(value.newMassageBody)
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
                    <ReduxAddMessageForm  onSubmit={addNewMessage}/>
                    {/*<textarea onChange={onMasssgeChange} value={props.dialogPage.newMassageBody}/>*/}
                    {/*<button onClick={onMassageClick}>send</button>*/}
                </div>
            </div>
        )

};

const maxLength = maxLengthCreator(40)

const AddMessageForm: React.FC<InjectedFormProps<HTMLTextAreaElement>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={TextArea}  name='newMassageBody' placeholder='enter your message' validate={[required, maxLength]}/>
    </div>
    <div>
        <button className={buttons.button1}>Send</button>
    </div>
    </form>
}

const ReduxAddMessageForm = reduxForm<HTMLTextAreaElement>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;