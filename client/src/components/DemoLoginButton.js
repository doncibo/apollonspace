import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import '../style/loginmodal.css'

function LoginButton(){
    const username = "yusuke@example.com"
    const password = "password"
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    }

    if(currentUserId) return <Redirect to="/" />;

    return(
        <div className="login" onClick={handleSubmit}>
            <button id="demologin" >Demo Sign in</button>
        </div>
    )
}

export default LoginButton;