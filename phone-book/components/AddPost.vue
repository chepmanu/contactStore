<template>
    <div>
    <form v-on:submit.prevent="addNewContact">
        <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger"   type="text" placeholder="Name" value="hello@" v-model="newContact.name">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger"  type="email" placeholder="passwoed" v-model="newContact.email">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Phone number</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger"  type="text" placeholder="Phone number"  v-model="newContact.number">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Picture</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger"  type="text" placeholder="Image " value="hello@" v-model="newContact.picture">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
             <p><nuxt-link to="/account/signup">I don't have an account</nuxt-link></p>
        </div>


      <div class="field">
        <p class="control">
            <button class="button is-success">
                Add
            </button>
        </p>
    </div>

    </form>
</div>
</template>

<script>
import { db } from '../services/fireinit'
import moment from 'moment';
export default {
    middleware: ["router-auth"],
    data() {
        return {
            newContact: {
                name: '',
                email: '',
                number: '',
                picture: ''
            }

        }
    },
    methods: {
        addNewContact(){
            let currDateTime = moment().toISOString()
            db.collection('contacts').add({
                name: this.newContact.name,
                email: this.newContact.email,
                number: this.newContact.number,
                picture: this.newContact.picture,
                dateTime: currDateTime,
            })
            .then(function(docRef) {
                console.log('add data called')
                console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error)
                    });
            this.newContact.name = ""
            this.newContact.email = ""
            this.newContact.number = ""
            this.newContact.picture = ""
        }
    },
    computed: {
        user(){
            return this.$store.getters.user
        }
    }

}
</script>

<style>

</style>
