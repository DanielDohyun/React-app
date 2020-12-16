import React, {useState, useEffect} from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import './Feed.css';
import db from '../../firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        });
        
    }, [posts])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    msg={post.data.msg}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    img={post.data.img}
                />    
            ))}

        </div>
    )
};

export default Feed;
