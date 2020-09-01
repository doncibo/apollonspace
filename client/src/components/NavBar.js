import React from 'react';
// import { Route } from 'react-router-dom' ;
import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import '../style/navbar.css'


function NavBar(){
    return (
        <div className="outer-nav">
            <div className="navbar">
                <LeftNav />
                <MiddleNav />
                <RightNav />
            </div>
        </div>
    )
}

export default NavBar;