import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result);
        })
        .catch((error) => alert(error.message));
    }
  return (
    <div className="login">
        <div className="login_logo">
            <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                alt=""
            />
            <img 
                src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                alt=""
            />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>

    </div>
  )
}

export default Login