import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALt1NUtWZnRDJk4EojQGFc-nKarIkdsnk",
  authDomain: "fir-react-auth-edc0b.firebaseapp.com",
  databaseURL: "https://fir-react-auth-edc0b.firebaseio.com",
  projectId: "fir-react-auth-edc0b",
  storageBucket: "fir-react-auth-edc0b.appspot.com",
  messagingSenderId: "873509206498",
  appId: "1:873509206498:web:5d1fa16b91c9c915ad61bb",
  measurementId: "G-MG0H9W9GWD"
};

const isFbInitialized = !!getApps.length;

const FirebaseClient = () => {
  if(!isFbInitialized) {
    initializeApp(firebaseConfig);
  }
}

export default FirebaseClient;

// const Client = isFbInitialized ? getApp() : initializeApp(firebaseConfig);

// export default Client;