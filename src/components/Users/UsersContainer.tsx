import React from 'react';
import {connect} from "react-redux";
import {AllAppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {
    follow, unfollow, UsersType, setCurrentPage,
    toggleFollowingInProgress, getUserThunkCreator,
} from "../../Redux/usersReducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/userSelectors";

export type UsersPropsType = MapStatePropsType & MapDispathPropsType
type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispathPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangeNumber = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onChangeNumber={this.onChangeNumber}
                   setCurrentPage={this.props.setCurrentPage}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
        </>
    }
}

let mapStateToProps = (state: AllAppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export  default  compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingInProgress,
            getUsers: getUserThunkCreator
        })
)(UsersContainer);