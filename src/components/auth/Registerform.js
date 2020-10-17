import React from 'react'
import {useForm }from 'react-hook-form'

// import { isValidImage, isValidUrl, sameAs } from 'helpers/Validators'

import { sameAs } from 'helpers/Validators'

const RegisterForm = (props) => {
  const { register, handleSubmit, errors, getValues } = useForm()

  return (
    <form onSubmit={handleSubmit(props.onRegister)}>
      <div className="field">
        <div className="control">
          <input ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                  name="email"
                  className="input is-large"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email" />
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
      <div className="field">
        <div className="control">
          {/* <input ref={register({required: true, validate: {isValidImage, isValidUrl}})}
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
          }*/}
        </div>
        <div className="field">
          <div className="control">
            {/* <input ref={register({required: false, validate: {isValidImage, isValidUrl}})}
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
            } */}
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