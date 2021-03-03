import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA083grZuDfOu7M7BmlSq7r5W4vYLuLMug",
    authDomain: "slack-clone-b3d5e.firebaseapp.com",
    projectId: "slack-clone-b3d5e",
    storageBucket: "slack-clone-b3d5e.appspot.com",
    messagingSenderId: "512027041944",
    appId: "1:512027041944:web:49086f0e06b2b99b2770ed"
  };

const FirebaseApp =  firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

export default db;