<template>
      <div>
    <div>
      <!-- loop through each of their posts -->
      <div class="card" v-for="(contact, idx) in get()" :key="idx">
        <!-- will show delete button on left if logged in user uid equals the user uid who made the post -->
        <div v-if="user && contact.uid === user.uid">
          <button @click="removeContact(contact.id)">X</button>
        </div>

        <!-- edit button -->
        <div v-if="user && contact.uid === user.uid">
          <button @click="updateContact(contact.id, contact.name, contact.email, contact.number, contact.picture)">Edit</button>
        </div>

        <!-- view button -->
        <div>
          <button @click="viewContact(contact.id)">View</button>
        </div>

        <section></section>
        <div>
          <ul>
            <li v-html="contact.name"></li>
            <li v-html="contact.email"></li>
            <li v-html="contact.number"></li>
            <li v-html="contact.picture"></li>
          </ul>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { db } from '../services/fireinit'
export default {
    components: {},
    data(){
        return {
            contact: [],

        }
    },
     computed: {
        ...mapGetters([
           'getContacts',
           'user',
           'getUpdateContact',
        ]),
        ...mapState({
          contacts: state => state.contacts,
        })
    },
    // mounted: {
      // getAllContacts(){
      //   db.collection("contacts").get().then(function(querySnapshot) {
      //       querySnapshot.forEach(function(doc) {
      //           // doc.data() is never undefined for query doc snapshots
      //           console.log(doc.id, " => ", doc.data());
      //           contacts.push(doc.data())
      //           this.$store.contacts.push(doc.data())
      //       });
      //   });
      // }
    //   ...mapState({
    //     contacts: state => state.contacts
    //   }),
    // },
   
    methods: {
        ...mapMutations([
            'setUpdateContact',
            'setViewContactKey',
            'setContacts'
        ]),
        get(){
          this.$store.dispatch('contactsGet')
        },
      // },
        removeContact(id){
          console.log('this is id', id);
            // let contactsDGref = db.collection('contacts').where('contact.name', '==', 'greg').get()
            // console.log('here we are', contactsDGref)
            console.log('data is',db.collection("contacts").doc("id"))
            db.collection("contacts").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            
        },
        updateContact(key, name, number, picture, email){
            this.setUpdateContact({key: key, name: name, number: number, email:email, picture:picture})
        },
        viewContact(key){
            this.setViewContactKey(key);
            this.$router.push('/account/viewcontact')
        }
    },
   
}
</script>

<style>

</style>
