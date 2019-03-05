import {
    firebaseAction
} from 'vuexfire';
  
import user from '../user';
import { db } from '../../services/fireinit';

const state = {
    contacts      : [],
    updateContact : {
        key     : null,
        name    : null,
        number  : null,
        picture : null,
        email   : null
    },
    userdata : {
        firstName       : null,
        lastName        : null,
        age             : null,
        uid             : null,
        createdDateTime : null,
        updatedDateTime : null,
        emailVerified   : null,
    },
    viewContactKey : null
};

const getters = {
    getContacts       : state => state.contacts,
    getUpdateContact  : state => state.updateContact,
    getUserData       : state => state.getUserData,
    getViewContactKey : state => state.getViewContactKey
};

const mutations = {
    addContact       : (state, contacts) => state.contacts.push(contacts),
    setUpdateContact : (state, payload) => {
        state.updateContact = {
            key    : payload.key,
            name   : payload.name,
            number : payload.number,
            email  : payload.email
        };
    },
    setUserData : (state,payload) => {
        state.userData = {
            firstName       : payload.firstName,
            lastName        : payload.lastName,
            age             : payload.age,
            updatedDateTime : payload.updatedDateTime,
        };
    },

    setViewContactKey : (state, key) => state.viewContactKey = key,
    setContacts       : (state, contacts) =>{
        const allContacts = contacts.data();
        state.contacts.push(allContacts);
        console.log(state.contacts);

    }
};

const actions = {
    async contactsGet({ commit }){
        let contactRef = db.collection("contacts");
        let contactsInfo = await contactRef.get();

        contactsInfo.forEach(contacts => commit('setContacts', contacts));
    },
    setContactRef : firebaseAction(({ bindFirebaseRef },) =>{
        let firebaseRef = db.collection('contacts');
        firebaseRef.get().then(() => {
            bindFirebaseRef('contacts', firebaseRef);
        });
    }),
    // setContactRef : firebaseAction(({ bindFirebaseRef }, id) => {
    //     let contactsRef = db.collection('contacts');
    //     bindFirebaseRef('contacts', contactsRef, { wait : true });
    //     bindFirebaseRef('contacts', contactsRef.doc(id), { wait : true });
    // }),
    setUsersRef : firebaseAction(({ bindFirebaseRef }, { ref })=>{
        bindFirebaseRef('users', ref);
    })
};

export default {
    state,
    mutations,
    getters,
    actions
};