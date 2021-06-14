import React, { useState } from 'react';
import './Login.css';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import { login, logout } from "./features/userSlice";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const registerNow = (e) => {
        if(!name) {
            return alert('Please enter your full name!');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                }).then( () => {
                    dispatch(login ({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })  
            }).catch((error) => console.log(error));
    }
    const loginToApp = (e) => {
        /*
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileURL: userAuth.user.photoURL
                }))
            }).catch(error => console.log(error))
            */
    }
    return (
        <div className="login">
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png" alt=""/>
       

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name'/>
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile Pic URL'/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form> 
            <p>Not a member ? <span className="login__register" onClick={registerNow}> Register Now </span>
            </p>
        </div> 
    )
}
export default Login
