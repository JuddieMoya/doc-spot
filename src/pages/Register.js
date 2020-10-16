import React, { useState} from 'react'
import RegisterForm from '../components/auth/Registerform'
import { register } from '../actions '
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import onlyGuest from 'components/hoc/onlyGuest'

// import { withRouter } from 'react-router-dom'

const Register = (props) => {

  const [ redirect, setRedirect ] = useState(false)
  const { addToast } = useToasts()

  const registerUser = (userData) => {
    // props.history.push('/')
    register(userData)
      .then(
        _ => setRedirect(true),
        errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 }))
  }

  if (redirect) { return <Redirect to="/" />}

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="data:image/jpeg;base64,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" alt="Company Logo" />
            </figure>
            <RegisterForm onRegister={registerUser} />
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

// export default withRouter(Register)
export default onlyGuest(Register)


