import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyDoxByZLqNDVec6nI2ATpzUyu3jrZ1kTbA",
    authDomain: "infusionaug8.firebaseapp.com",
    databaseURL: "https://infusionaug8.firebaseio.com",
    projectId: "infusionaug8",
    storageBucket: "infusionaug8.appspot.com",
    messagingSenderId: "98550576086"
};
console.log(firebase.apps);
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.apps[0];

