

import withAuthorization from '../components/hoc/withAuthorization'



import React from 'react'

const Profile = (props) => {
  return (
    <h1>I am SECRET Page, ONLY Auth USER can see me!</h1>
  )
}

export default withAuthorization(Profile)