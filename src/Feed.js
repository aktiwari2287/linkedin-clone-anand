import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions'
import './Feed.css';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from './Post';
function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" name="" id=""/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Picture" color="#70B5F9"/>
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <Post name='Anand Kumar Tiwari' description='This is a test' message='It works'/>
        </div>
    )
}

export default Feed
