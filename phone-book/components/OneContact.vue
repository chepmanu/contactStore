<template>
    <div>
    <div>
      <div >
        <div>
          <section>
          <div>
            <ul>
              <li v-html="contact.name"></li>
              <li v-html="contact.email"></li>
              <li v-html="contact.number"></li>
              <li v-html="contact.picture"></li>
            </ul>
          </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { functions } from 'firebase';
import { db } from "../services/fireinit"
export default {
    data(){
        return{
            contact: {
                name: null,
                email: null,
                password: null,
                number: null,

            }
        }
    },
    computed: {
        ...mapGetters([
            'getContacts',
            'getViewContactKey',
            'user'
        ])
    },
     mounted: function(){
        this.getCurrentContact();
    },
    methods: {
        ...mapMutations([
            'setViewContactKey'
        ]),
        getCurrentContact(){
            db.collection("contacts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.contact = {
                        name: doc.name,
                        email: doc.email,
                        password: doc.password,
                        picture: doc.picture,
                        key: doc.id

                    }
    });
});
        },
        getCurrentContacter(){
            for(let each in this.getContacts){
                if(this.getContacts[each]['key'] === this.getViewContactKey){
                    let contactInfo = this.getContacts[each]
                    this.contact = {
                        name: contactInfo.name,
                        email: contactInfo.email,
                        password: contactInfo.password,
                        picture: contactInfo.picture,
                        key: contactInfo['key']

                    }
                }
            }
        }
    }

}
</script>

<style>

</style>
