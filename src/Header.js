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
        //dispatch(logout());
        //auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1623332815~hmac=1fe72c8745cf818e843b8863b2c7df3b" alt=""/>
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
                title="Me" onClick={logoutOfApp()}></HeaderOption>
            </div>
        </div>
    )
}

export default Header
