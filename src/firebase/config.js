import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAbDqoIxiqNQ85Ln5kW93v1yghsXJwed9I",
    authDomain: "mybooks-5e3e6.firebaseapp.com",
    projectId: "mybooks-5e3e6",
    storageBucket: "mybooks-5e3e6.appspot.com",
    messagingSenderId: "807453230745",
    appId: "1:807453230745:web:6f39a9dd64369c8ced5a08"
  };

  // init firebase 

  firebase.initializeApp(firebaseConfig)

  // init services

  //const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectAuth}