import React from 'react';
import Header from './Header'
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice';
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   auth.onAuthStateChanged( (userAuth) => {
  //     console.log("on auth", userAuth)
  //     if(userAuth) {
  //       dispatch(login({
  //         email: userAuth.email,
  //         uid: userAuth.uid,
  //         displayName: userAuth.displayName,
  //         photoURL: userAuth.photoURL
  //       }))
  //     } else {
  //       console.log("Inside else block");
  //       dispatch(logout());
  //     }
  //   })
  // },[]);
  return (
    <div className="app">
        <Header></Header>
        { !user ? (
            <Login />
        ):(
        <div className="app__body">
          <Sidebar/>
          <Feed/>
        </div>
        )}
    </div>
  );
}

export default App;
