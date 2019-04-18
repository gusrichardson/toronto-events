import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBKqbtDbOU87DXS3r_jEyaM2drG-eTrtCY",
    authDomain: "firebasicstutorial.firebaseapp.com",
    databaseURL: "https://firebasicstutorial.firebaseio.com",
    projectId: "firebasicstutorial",
    storageBucket: "firebasicstutorial.appspot.com",
    messagingSenderId: "924177388749"
};
firebase.initializeApp(config);

export default firebase;
