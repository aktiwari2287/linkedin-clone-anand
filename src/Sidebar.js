import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => {
       return   <div className="sidebar__recentItems">
                    <span className="sidebar__hash">#</span>
                    <p>{topic}</p>
                </div>
    }
    return <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt=""/>
                <Avatar className="sidebar__avatar" src={user.photoURL}></Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,887
                    </p>
                </div>
               
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('NextJS with Redux')}
                {recentItem('JavaScript & Flutter')}
                {recentItem('Dart')}
                {recentItem('Java')}
                {recentItem('Angular')}
            </div>
        </div>
       
}

export default Sidebar
