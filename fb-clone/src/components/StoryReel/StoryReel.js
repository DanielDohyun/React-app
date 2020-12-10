import React from 'react';
import Story from '../Story/Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerp0s0QysNj9U_zD2Gjk5BgerF6NirqCB8g&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BpYNo6xw_SZV9C-pgTkRQ1Ig-QsuLGzi3A&usqp=CAU"
                title="David"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeaw14glXivfLb6HQ7tnf7VASNAaLgarNSw&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3miMTPoPR10HlsqJt7wr-z_qlWla5keO5g&usqp=CAU"
                title="Mike"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerp0s0QysNj9U_zD2Gjk5BgerF6NirqCB8g&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BpYNo6xw_SZV9C-pgTkRQ1Ig-QsuLGzi3A&usqp=CAU"
                title="Michelle"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeaw14glXivfLb6HQ7tnf7VASNAaLgarNSw&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3miMTPoPR10HlsqJt7wr-z_qlWla5keO5g&usqp=CAU"
                title="Adam"
            />
            
        </div>
    )
}

export default StoryReel;
