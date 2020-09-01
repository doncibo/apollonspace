//contains mid nav component, ie search bar
import React from 'react';

function MiddleNav(){
    console.log("middle bar renders")
    return(
        <div className="middlenav">
            <input id="search" placeholder="Search for artists, bands, and tracks"></input>
        </div>
    )
}

export default MiddleNav;
