import React, { useState} from 'react'
import RegisterForm from 'components/auth/Registerform'
import { register } from 'actions'
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
        
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="data:image/png;base64,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" alt="Company Logo" />
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



