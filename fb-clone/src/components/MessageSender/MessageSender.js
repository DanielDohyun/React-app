import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        db
            .collection('posts')
            .add({
                msg: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                img: imageUrl,
            })

        setInput('');
        setImageUrl('');
    };

    return (
        <div className="msg">
            <div className="msg__top">
                <Avatar src={ user.photoURL }/>
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="msg__input"
                        placeholder={`Whats on your mind, ${user.displayName}?`} />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
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
