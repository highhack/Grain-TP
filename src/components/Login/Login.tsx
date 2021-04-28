import React from "react";
import  {InjectedFormProps, Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login, logout} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AllAppStateType} from "../../Redux/redux-store";
import s from './../../common/FormsControls/FormsControls.module.css'

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={required} type={'password'}/>
            </div>
            <div>
                <Field component='input' type={'checkbox'} name={'rememberMe'}/> remember me
            </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm);

// type LoginProps = {
//     login: (dataForm: {
//         email: string,
//         password: string,
//         rememberMe: boolean
//     }) => void
// }
const Login = (props: any ) => {
    const onSubmit = (dataForm: LoginFormDataType) => {
        props.login(dataForm.email, dataForm.password, dataForm.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profil'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AllAppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login,logout})(Login)