import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { getUserProfile } from '../api/index'
import { useDispatch } from "react-redux"

const Profile = ({user}) => {
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState(user);

    // const handleSubmit = () => {
    //     dispatch(getUserProfile({...user, userInfo}));
    // }

    // const getMyData = async () => {
    //     let UID = firebase.auth().currentUser.uid;
    //     userInfo = await getUserProfile(UID);
    //     console.log("this is the user data", userInfo)
    //     return userInfo
    // }

    
    firebase.auth().onAuthStateChanged(function(user) {
        let currentUser = firebase.auth().currentUser;
        let name, email, avatar, uid, emailVerified;
        if (currentUser != null) {
            name = user.displayName;
            email = user.email;
            avatar = user.avatar;
            emailVerified = user.emailVerified;
            uid = user.uid;
          } else {
            return null
        }
        console.log(user.email)
    });

    // useEffect (() => {
    //     setUserInfo(getMyData())
    // }, [])

    const handleCancel = () => {
        dispatch(getUserProfile(user.id));
    };

    return (
        // <div className="auth-page">
        //     <div className="container has-text-centered">
        //         <div className="column is-4 is-offset-4">
        //             <div className="box">
        //                 <figure className="avatar">
        //                     {/* <img src="" /> */}
        //                 </figure>
        //             </div>
        //             {userInfo}
        //             <button>Edit User</button>
        //         </div>
        //     </div>
        // </div>
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Profile 