import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from "./firebase";
import "./Login.css"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://n7.nextpng.com/sticker-png/345/662/sticker-png-blackberry-keyone-blackberry-priv-blackberry-messenger-messaging-apps-blackberry-text-logo-fruit-nut-mobile-phones.png" alt=""/>
                <h1>Auricular iMessage</h1>
                </div>
                <Button onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
