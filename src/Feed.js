import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions'
import './Feed.css';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => (
               {
                   id: doc.id,
                   data: doc.data()
               }
           )))
       ))
    }, [])

    
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
               name: user.displayName, 
               description: user.email,
               message: input,
               imageUrl: user.photoURL,
               timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    }
    return ( 
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit" className="light">
                            <SendOutlinedIcon style={{'color':'lightblue'}} />
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Picture" color="#70B5F9"/>
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
           
            {
                posts.map(({id, data: {name, description, message, photoUrl}})=>(
                    <Post key={id} name={name} description={description} message={message} photoUrl={user.photoURL}/>
                ))
            } 
            
            </FlipMove>
        </div>
    )
}

export default Feed
