import React, {useEffect, useState } from 'react'
import {useForm }from 'react-hook-form'
<<<<<<< HEAD
import app from "../../firebase/firebase";
// import { isValidImage, isValidUrl, sameAs } from 'helpers/Validators'
import {  sameAs } from 'helpers/Validators'
=======

import { isValidImage, isValidUrl, sameAs } from 'helpers/Validators'

// import { sameAs } from 'helpers/Validators'
>>>>>>> 599d375a34df725501f60de1f78021d26e3d6e7f

const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loggedInUser, setUser] = useState(null);
  const { register, handleSubmit, errors, getValues } = useForm()
  
  useEffect(() => {
    const authListener = app.auth().onAuthStateChanged(function (user) {
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

  return (
    <form onSubmit={handleSubmit(props.onRegister)}>
      <div className="field">
        <div className="control">
          <input ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                  name="email"
                  className="input is-large"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} />
          { errors.email &&
            <div className="form-error">
              { errors.email.type === 'required' && <span className="info-please ">Email is required</span> }
              { errors.email.type === 'pattern' && <span className="info-please ">Email address is not valid</span> }
            </div>
          }
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input ref={register({required: true, minLength: 1})}
                  name="fullName"
                  className="input is-large"
                  type="text"
                  placeholder="Full Name"/>
          { errors.fullName &&
            <div className="form-error">
              { errors.fullName.type === 'required' && <span className="info-please ">Name is required</span> }
              { errors.fullName.type === 'minLength' && <span className="info-please ">Minimum length is 10characters</span> }
            </div>
          }
        </div>
      </div>
      {/* <div className="field">
        <div className="control">
          <input ref={register({required: true, validate: {isValidImage, isValidUrl}})}
                  name="picture"
                  className="input is-large"
                  type="text"
                  placeholder="picture"/>
          { errors.picture &&
            <div className="form-error">
              { errors.picture.type === 'required' && <span className="info-please ">picture is required</span> }
              { errors.picture.type === 'isValidImage' && <span className="info-please ">picture extenstion is not valid</span> }
              { errors.picture.type === 'isValidUrl' && <span className="info-please ">picture url is not valid</span> }
            </div>
          }
        </div>
<<<<<<< HEAD
      </div> */}
      <div className="field">
        <div className="control">
          <input ref={register({required: true, minLength: 6})}
                  name="password"
                  className="input is-large"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setEmail(e.target.value)} />
          { errors.password &&
            <div className="form-error">
              { errors.password.type === 'required' && <span className="info-please ">Password is required</span> }
              { errors.password.type === 'minLength' && <span className="info-please ">Minimum length is 6 characters</span> }
            </div>
          }
=======
        <div className="field">
          <div className="control">
            <input ref={register({required: false, validate: {isValidImage, isValidUrl}})}
                   name="picture"
                   className="input is-large"
                   type="text"
                   placeholder="picture"/>
            { errors.picture &&
              <div className="form-error">
                { errors.picture.type === 'required' && <span className="info-please ">picture is required</span> }
                { errors.picture.type === 'isValidImage' && <span className="info-please ">picture extenstion is not valid</span> }
                { errors.picture.type === 'isValidUrl' && <span className="info-please ">picture url is not valid</span> }
              </div>
            }
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input ref={register({required: true, minLength: 6})}
                   name="password"
                   className="input is-large"
                   type="password"
                   placeholder="Your Password"
                   autoComplete="current-password" />
            { errors.password &&
              <div className="form-error">
               { errors.password.type === 'required' && <span className="info-please ">Password is required</span> }
               { errors.password.type === 'minLength' && <span className="info-please ">Minimum length is 6 characters</span> }
              </div>
            }
          </div>
>>>>>>> 599d375a34df725501f60de1f78021d26e3d6e7f
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input ref={register({required: true, minLength: 6, validate: {sameAs: sameAs(getValues, 'password')}})}
                  name="passwordConfirmation"
                  className="input is-large"
                  type="password"
                  placeholder="Repeat Password"
                  autoComplete="current-password" />
          { errors.passwordConfirmation &&
            <div className="form-error">
              { errors.passwordConfirmation.type === 'required' && <span className="info-please ">Password confirmation is required</span> }
              { errors.passwordConfirmation.type === 'minLength' && <span className="info-please ">Minimum length is 6 characters</span> }
              { errors.passwordConfirmation.type === 'sameAs' && <span className="info-please ">Password confirmation is not the same as password</span> }
            </div>
          }
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth">Register</button>
    </form>
  )
}
  
  export default RegisterForm