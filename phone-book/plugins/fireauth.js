// import firebaseConfig from '../firebase';
import { auth, dbContactsRef } from '../services/fireinit';
import firebase from 'firebase';

// if (!firebaseConfig) {
//     throw new Error('missing firebase.json config.');
// }

// export default context =>({
//     store,
// }) {
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     return firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             store.commit('setUser', user);
//         }
//     });
// }

export default context =>{
    const { store } = context;
    store.dispatch('setContactRef', dbContactsRef);

    return new Promise ((resolve, reject) =>{
        auth.onAuthStateChanged(user =>{
            if (user){
                return resolve (store.commit('setUser', user));
            }
            return resolve();

        });
    });
};