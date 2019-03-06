import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

var config = {
    apiKey            : "",
    authDomain        : "",
    databaseURL       : "",
    projectId         : "",
    storageBucket     : "",
    messagingSenderId : ""
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