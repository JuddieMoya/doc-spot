import React, { useState } from 'react'
import firebase from 'firebase/app'
import { useDispatch } from "react-redux"

const Profile = ({user}) => {
    const dispatch = useDispatch();

    let [userInfo, setUserInfo] = useState(user);
    
    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         let currentUser = firebase.auth().currentUser;
    //          let name, email, avatar, uid, emailVerified;
    //          if (currentUser != null) {
    //              name = user.displayName;
    //              email = user.email;
    //              avatar = user.photoURL;
    //              emailVerified = user.emailVerified;
    //              uid = user.uid;
    //            } else {
    //              return null
    //          }
    
    //          console.log("emial text", email)
    //     });
    // }, [])

    firebase.auth().onAuthStateChanged(function(user) {
       let currentUser = firebase.auth().currentUser;
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
        console.log("emial text", user.displayName)
    });
    let toggle = true
    const handleEdit = () => {
        toggle = !toggle
    }

    const deleteUser =(evt)=> {
        const user = firebase.auth().currentUser;
        console.log(user)
        let password = prompt('password')
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            }).catch(function(error) {
            // An error happened.
            console.error(error)
            });
        user.delete().then(function() {
        // User deleted.
        }).catch(function(error) {
            console.error(error)
        // An error happened.
        });
    }

    return (
        <>
            <div className="containter">
                {/* <img src={} alt="avatar"/> */}
                <h1>Eleanor Hall</h1>
                <button onClick={handleEdit}>Edit User</button>
                <button type="button" className="" onClick={deleteUser}>Delete User</button>
                <br />
                {toggle === false ? [
                <label for="Dname">Display Name</label>,
                <br />,
                <input type="text" name="displayName" />,
                <br />,
                <label for="email">Email</label>,
                <br />,
                <input type="email" name="email" />,
                <br />,
                <label for="password">Password</label>,
                <br />,
                <input type="password" name="password" value="RoboKid"/>,
                <br />,
                <button>Submit</button>] :
                null }
            </div>
        </>
    )
}

export default Profile