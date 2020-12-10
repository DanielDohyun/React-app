import React from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                // key={id}
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BpYNo6xw_SZV9C-pgTkRQ1Ig-QsuLGzi3A&usqp=CAU'
                msg="It's working"
                timestamp="This is a timestamp"
                username="dhkim"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeaw14glXivfLb6HQ7tnf7VASNAaLgarNSw&usqp=CAU"
            />
            <Post />
            <Post />
        </div>
    )
};

export default Feed;
