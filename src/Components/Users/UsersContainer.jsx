import React from "react";
import UsersFunc from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
    }
}

let mapStateToDispatch = (dispatch) =>{
    return{
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount:(totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(UsersFunc);

