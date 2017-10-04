import * as firebase from 'firebase';

const config = {
    // your config stuff
    apiKey: "AIzaSyDoxByZLqNDVec6nI2ATpzUyu3jrZ1kTbA",
    authDomain: "infusionaug8.firebaseio.com/",
    databaseURL: "https://infusionaug8.firebaseio.com/",
    storageBucket: "infusionaug8.appspot.com"
};
firebase.initializeApp(config);

export default firebase;
