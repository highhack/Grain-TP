import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Sidebar/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilContainer from "./components/Profil/ProfilContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReduser";
import {AllAppStateType} from "./Redux/redux-store";
import Preloader from "./common/Preloader";

type Props = {
    initializeApp: () => void
    initialized: boolean
}
class App extends React.Component<Props> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return  <Preloader />}
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profil' render={() => <ProfilContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: AllAppStateType) => ({
    initialized: state.app.initialized
})


export default compose<React.ComponentType>(withRouter,connect(MapStateToProps, {initializeApp}))(App);