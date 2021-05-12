import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCRePnf-4c_lY0GhFAMjt62XISMveotHQ",
    authDomain: "incred-fe556.firebaseapp.com",
    projectId: "incred-fe556",
    storageBucket: "incred-fe556.appspot.com",
    messagingSenderId: "988639171832",
    appId: "1:988639171832:web:8084cc710b2ea04814d70d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;