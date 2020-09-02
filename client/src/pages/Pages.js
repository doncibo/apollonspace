import React from 'react';
import { Route } from 'react-router-dom' ;
import LoginPage from './LoginPage';
import SignUp from './SignUp'

export default function Pages(){
    return (
        <>  
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignUp} />
        </>
    )
};