import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAEz9-YvbHwgelQHHf0RoMmUvlaf9W_9xk",
  authDomain: "wily-app-datastorer.firebaseapp.com",
  projectId: "wily-app-datastorer",
  storageBucket: "wily-app-datastorer.appspot.com",
  messagingSenderId: "536814371245",
  appId: "1:536814371245:web:7f022f39c4c00dfa292124"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
