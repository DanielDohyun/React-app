import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="msg">
            <div className="msg__top">
                <Avatar />
                <form>
                    <input
                        className="msg__input"
                        placeholder="Whats on your mind?" />
                    <input
                        placeholder="image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>    
            </div>

            <div className="msg__bottom">
                <div className="msg__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Liver Video</h3>
                </div>

                <div className="msg__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="msg__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
