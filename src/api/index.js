import db from 'db'
import firebase from 'firebase/app'


export const fetchServiceById = serviceId => 
  db.collection('services')
    .doc(serviceId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))


export const fetchServices = () => 
  db.collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
    })



const createUserProfile = (userProfile) => 
  db.collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)

export const register = async ({email, password, fullName, avatar}) => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const { user } = res
    const userProfile = { uid: user.uid, fullName, email, avatar, services: [], description: ''}
    await createUserProfile(userProfile)
    return userProfile
  } catch(error) {
    return Promise.reject(error.message)
  }
}

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

export const login = ({email, password}) => 
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => Promise.reject(error.message))

import db from 'db'

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './services'
export * from './auth'
export * from './offers'
export * from './collaborations'
export * from './connection'
