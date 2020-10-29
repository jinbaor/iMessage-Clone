// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAlJWxSJMk90Sl3CEbJMKJA_mkOrUP1Hb4",
    authDomain: "message-clone-6b18c.firebaseapp.com",
    databaseURL: "https://message-clone-6b18c.firebaseio.com",
    projectId: "message-clone-6b18c",
    storageBucket: "message-clone-6b18c.appspot.com",
    messagingSenderId: "170460940457",
    appId: "1:170460940457:web:bc7de8a1c2b6d05ea501b8",
    measurementId: "G-D6RD8HP1VS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;