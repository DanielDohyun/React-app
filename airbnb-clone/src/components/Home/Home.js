import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';

function Home() {
    return (
        <div className="home">
            <Banner />
            <Cards />
        </div>
    )
}

export default Home;
