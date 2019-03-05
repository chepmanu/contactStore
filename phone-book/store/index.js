import Vuex from 'vuex';

import user from './user';
import shared from './shared';
import contacts from './contacts';
import {
    firebaseMutations
} from 'vuexfire';

const store = () => {
    return new Vuex.Store({
        mutations : { ...firebaseMutations
        },
        modules : {
            user     : user,
            shared   : shared,
            contacts : contacts
        }
    });
};

export default store;