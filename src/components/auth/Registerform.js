import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import {Card, Nav} from 'react-bootstrap'
import {register as apiRegister} from '../../api/index'
import { isValidImage, isValidUrl, sameAs } from 'helpers/Validators'
const RegisterForm = (props) => {
  
    const { register, handleSubmit, errors, getValues } = useForm()
    const onSubmit = data => apiRegister(data)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <input ref={register({required: true, validate: {isValidImage, isValidUrl}})}
                  name="avatar"
                  className="input is-large"
                  type="text"
                  placeholder="Avatar"/>
            { errors.avatar &&
              <div className="form-error">
                { errors.avatar.type === 'required' && <span className="help is-danger">Avatar is required</span> }
                { errors.avatar.type === 'isValidImage' && <span className="help is-danger">Avatar extenstion is not valid</span> }
                { errors.avatar.type === 'isValidUrl' && <span className="help is-danger">Avatar url is not valid</span> }
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
        <button type="submit" className="button is-block is-info is-large is-fullwidth">Register</button>
      </form>
    )
  }
  
export default RegisterForm