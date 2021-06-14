import {Avatar} from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, {forwardRef} from 'react';
import InputOptions from './InputOptions';
import './Post.css';

const tempPost = ({name, description, message, photoUrl}, ref) => {
    return <div ref = {ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}> {name[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                {message}
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray"></InputOptions>
                <InputOptions Icon={ChatOutlined} title="Comment" color="gray"></InputOptions>
                <InputOptions Icon={ShareOutlined} title="Share" color="gray"></InputOptions>
                <InputOptions Icon={SendOutlined} title="Send" color="gray"></InputOptions>
            </div>
        </div>
}
const Post = forwardRef(tempPost);
export default Post
