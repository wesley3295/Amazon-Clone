import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCep1PCQZO6WbthgKKen3aT96EKxVuXGF0",
    authDomain: "clone-22f24.firebaseapp.com",
    projectId: "clone-22f24",
    storageBucket: "clone-22f24.appspot.com",
    messagingSenderId: "800743443489",
    appId: "1:800743443489:web:06a34395ebc2d0c4ede760"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}