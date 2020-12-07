import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays - 26 august to 30 august - 2 guest
                </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                location="Private house in center of Toronto"
                title="Its all yours"
                description="5-8 guest 3 bedrooms 2 bathrooms kitchen wifi"
                star={4.8}
                price="$150/night"
                total="$310 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b4?width=750%format=jpeg&auto-webp"
                location="Private house in center of Toronto"
                title="Its all yours"
                description="1-2 guest 1 bedroom 1bathroom kitchen wifi"
                star={4.5}
                price="$60/night"
                total="$130 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                location="Private house in center of Toronto"
                title="Its all yours"
                description="5-8 guest 3 bedrooms 2 bathrooms kitchen wifi"
                star={4.8}
                price="$150/night"
                total="$310 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                location="Private house in center of Toronto"
                title="Its all yours"
                description="5-8 guest 3 bedrooms 2 bathrooms kitchen wifi"
                star={4.8}
                price="$150/night"
                total="$310 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                location="Private house in center of Toronto"
                title="Its all yours"
                description="5-8 guest 3 bedrooms 2 bathrooms kitchen wifi"
                star={4.8}
                price="$150/night"
                total="$310 total"
            />
        
        </div>
    )
}

export default SearchPage;
