import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        alert("cliked to logout");
        dispatch(logout());
       auth.signOut();
        //https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png" alt="Linked IN"/>
                <div className="header__search">
                    <SearchIcon></SearchIcon>
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
                <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
                <HeaderOption avatar="https://avatars.githubusercontent.com/u/7508506?v=4"
                title="Me" onClick={logoutOfApp}></HeaderOption>
            </div>
        </div>
    )
}

export default Header
