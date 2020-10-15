import React, { useState, useEffect } from 'react'
import {useForm }from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'

import { login, storeAuthUser } from '../actions '
import app from '../firebase/firebase'


const Login = () => {
  const [ redirect, setRedirect ] = useState(false)
  const { register, handleSubmit } = useForm()
  const { addToast } = useToasts()
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loggedInUser, setUser] = useState(null);
   
  

  const onLogin = loginData => {
    login(loginData)
      .then(
        _ => setRedirect(true),
        errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
      )
  }


useEffect(()=> {
  const authListener = app.auth().onAuthStateChanged(function (user){
    setUser(user);
    if (user) {
      console.log(user);
    } else {
      console.log("User Logged Out");
    }
  });
  return () => {
    authListener();
  };
}, []);

const registerUser = () => {
  app
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(function (error) {
      // Handle Errors here.
      alert(error);
      // ...
  });
};

const login = () => {
  app
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function (error) {
      alert(error);
  });
};

  if (redirect) { return <Redirect to="/" />}

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://placehold.it/240x240" alt="Company Logo" />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="field">
                <div className="control">
                  <input 
                    ref={register}
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Email"
                    value={email}
                    autoComplete="email" 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input 
                    ref={register}
                    name="password"
                    className="input is-large"
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    autoComplete="current-password" 
                    onChange={(e)=> setPass(e.target.value)}/>
                </div>
              </div>
              <button
              onClick={login}
                type="submit"
                className="button is-block is-info is-large is-fullwidth">Sign In</button>
            </form>
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login