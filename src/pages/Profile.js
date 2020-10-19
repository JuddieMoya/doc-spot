import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { getUserProfile } from '../api/index'
import { useDispatch } from "react-redux"

const Profile = ({user}) => {
    const dispatch = useDispatch();

    let [userInfo, setUserInfo] = useState(user);

    // const getMyData = async () => {
    //     let UID = firebase.auth().currentUser.uid;
    //     userInfo = await getUserProfile(UID);
    //     console.log("this is the user data", userInfo)
    //     return userInfo
    // }
    let currentUser = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged(function(user) {
       
        let name, email, avatar, uid, emailVerified;
        if (currentUser != null) {
            name = user.displayName;
            email = user.email;
            avatar = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
          } else {
            return null
        }
        console.log(email)
    });
    
    const handleEdit = () => {
        let toggle = document.getElementById("editUser");
        if(toggle.style.display === "none") {
            toggle.style.display = "block";
        } else {
            toggle.style.display = "none"
        }
    }
                
    // useEffect (() => {
    //     setUserInfo(getMyData())
    // }, [])

    return (
        <>
            <div className="containter">
                {/* <img src={} alt="avatar"/> */}
                <h1>Username</h1>
                <button onClick={handleEdit}>Edit User</button>
                <div id="editUser">
                    <input />
                    <input />
                    <input />
                </div>
            </div>    
        </>
    )
}

export default Profile