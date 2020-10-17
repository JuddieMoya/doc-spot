import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import  index from '../api/index'
import db from 'db'
const Profile = () => <h1>I am Profile Page</h1>






export const getUserProfile = uid =>

  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))
    console.log('getUserProfile')

export default withAuthorization(Profile)