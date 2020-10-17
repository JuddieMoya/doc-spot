import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'

const Profile = () => <h1>I am Profile Page</h1>

export default withAuthorization(Profile)