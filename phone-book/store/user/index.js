import * as firebase from 'firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';

function createNewAccount(user) {
    console.log('hey', user.user.email);
    return firebase.database().ref(`accounts/${user.uid}`).set({
        displayName : user.user.displayName || user.user.email.split('@')[0], // use part of the email as a username
        email       : user.user.email,
        image       : user.user.newImage || '/images/default-profile.png' // supply a default profile image for all users
    });
}

export default {
    state : {
        user            : null,
        userProfileData : null
    },
    mutations : {
        setUser(state, payload){
            state.user = payload;
        },
        setUserProfileData(state, payload){
            state.userProfileData = payload;
        }
    },
    actions : {
        setAccountRef : firebaseAction((({ bindFirebaseRef }, path) =>{
            return bindFirebaseRef('account', firebase.database().ref(path));
        })),
        resetUser({
            state
        }){
            state.user = null;
        },
        createUser({ commit }, account) {
            commit('setLoading', true);
            return firebase.auth()
                .createUserWithEmailAndPassword(account.email, account.password)
                .then((user) =>{
                    commit('setLoading', false);
          
                    return createNewAccount(user)
                        .catch(
                            error => {
                                commit('setLoading', false);
                                commit('setError', error);
                                console.log(error);
                            }
                        );
                });
        },
        userLogin({ commit }, account){
            return firebase.auth()
                .signInWithEmailAndPassword(account.email, account.password)
                .then(
                    user => {
                        commit('setLoading', false);
                        const newUser = {
                            id    : user.user.uid,
                            name  : user.user.displayName,
                            email : user.user.email,
                        };
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false);
                        commit('setError', error);
                        console.log(error);
                    }
                );
        },logout({commit}) {
            firebase.auth().signOut();
            commit('setUser', null);
        },
    },
    getters : {
        user(state){
            return state.user;
        }
    },

};