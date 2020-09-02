//contains sign in, create account for right side of nav bar

import React from 'react';
import { Link } from 'react-router-dom';

function RightNav(){
    console.log("right bar renders")
    return(
        <div className="rightnav">
            <Link to="/login" className="login">
                <button id="login">Sign in</button>
            </Link>
            <Link to="/signup" className="signup">
                <button id="signup">Create account</button>
            </Link>
        </div>
    )
}

export default RightNav;