import React, { useState } from 'react';
import './Banner.css';
import Search from './Search';
import {useNavigate} from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    function toggle(){
        setShowSearch (!showSearch);
    }
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <button onClick={toggle}>{showSearch ? "Hide" : "Search Date"}</button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    plan a different kind of 
                    getaway to uncover the hidden 
                    gems near you.
                </h5>
                <button onClick={() => navigate('/search')}>Explore Nearby</button>
            </div>
        </div>
    )
}

export default Banner