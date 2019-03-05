import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// if (!firebase.app.length){
//     console.log('Hey bruhh');
//     firebase.initializeApp({
//         apiKey            : "AIzaSyD_xxvi-nhmj2JB5i3PD_Pe1GN3wai9T4w",
//         authDomain        : "phone-book-9b50d.firebaseapp.com",
//         databaseURL       : "https://phone-book-9b50d.firebaseio.com",
//         projectId         : "phone-book-9b50d",
//         storageBucket     : "phone-book-9b50d.appspot.com",
//         messagingSenderId : "563002322421"
//     });
var config = {
    apiKey            : "AIzaSyD_xxvi-nhmj2JB5i3PD_Pe1GN3wai9T4w",
    authDomain        : "phone-book-9b50d.firebaseapp.com",
    databaseURL       : "https://phone-book-9b50d.firebaseio.com",
    projectId         : "phone-book-9b50d",
    storageBucket     : "phone-book-9b50d.appspot.com",
    messagingSenderId : "563002322421"
};

!firebase.apps.length ? firebase.initializeApp(config) : '';
export const auth = firebase.auth();
export const DB = firebase.database();
export const db = firebase.firestore();
db.settings({
    timestampsInSnapshots : true
});
export const dbContactsRef = db.collection('contacts');
export default firebase;