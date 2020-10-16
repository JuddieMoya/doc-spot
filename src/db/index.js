import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyAgxsZMG1c0_d16pVHMNHLlo5WyNBgIKRM",
      authDomain: "docspot1-29088.firebaseapp.com",
      databaseURL: "https://docspot1-29088.firebaseio.com",
      projectId: "docspot1-29088",
      storageBucket: "docspot1-29088.appspot.com",
      messagingSenderId: "871868432247",
      appId: "1:871868432247:web:c278fe461df49b88936b72",
      measurementId: "G-RKHLG54LDG"
    }
  )

  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }
