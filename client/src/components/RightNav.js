//contains sign in, create account for right side of nav bar

import React from 'react';


function RightNav(){
    console.log("right bar renders")
    return(
        <div className="rightnav">
            <div className="login">
                <button id="login">Sign in</button>
            </div>
            <div className="signup">
                <button id="signup">Create account</button>
            </div>
        </div>
    )
}

export default RightNav;