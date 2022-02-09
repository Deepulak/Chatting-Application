import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD2bGIJ15koGqlNLew9DWwyx6_uADyEIDU",
    authDomain: "chatapp-3d2a4.firebaseapp.com",
    projectId: "chatapp-3d2a4",
    storageBucket: "chatapp-3d2a4.appspot.com",
    messagingSenderId: "996788405924",
    appId: "1:996788405924:web:00e4f01d8f8d5193d10831",
  })
  .auth();
