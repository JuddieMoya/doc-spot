import React, { Component } from 'react'
import firebase from 'firebase/app'
import { getUserByUID } from '../api/index'
import withAuthorization from 'components/hoc/withAuthorization'

const Profile = () => {

    const getMyData = async () => {
        let UID = firebase.auth().currentUser.uid;
        let userData = await getUserByUID(UID);
        console.log(userData.image)
    }
    let tog = true
    const toggle = () => {
        return !tog
    }

    return (
        <div className="auth-page">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <figure className="avatar">
                            <img src="" alt="Company Logo" />
                        </figure>
                    </div>
                    <button onClick={toggle}>Edit User</button>
                    {tog === true ? null : 
                    <span>
                        {getMyData}
                    </span>}
                </div>
            </div>
        </div>
    )
}

export default withAuthorization(Profile)