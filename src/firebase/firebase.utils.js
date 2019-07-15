import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyDi2aUDFIl8IP6MemF78yocDFoHBAI_mw8",
   authDomain: "clothing-store-5199c.firebaseapp.com",
   databaseURL: "https://clothing-store-5199c.firebaseio.com",
   projectId: "clothing-store-5199c",
   storageBucket: "",
   messagingSenderId: "948524927672",
   appId: "1:948524927672:web:d2c14b49210f73db"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;