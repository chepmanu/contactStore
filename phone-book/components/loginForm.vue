<template>
<div>
    <form v-on:submit.prevent="signIn">
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" v-bind:class="{ 'is-danger': invalidEmail }"  type="email" placeholder="Email input" value="hello@" v-model="email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
                <p class="help is-danger" v-if="invalidEmail">This email is invalid</p>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" v-bind:class="{ 'is-danger': invalidPassword }"  type="passwoed" placeholder="passwoed" v-model="password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </div>
                <p class="help is-danger" v-if="invalidPassword">This password is invalid</p>
        </div>

        <div class="field">
             <p><nuxt-link to="/account/signup">I don't have an account</nuxt-link></p>
        </div>

        <div class="field is-grouped">
        <div class="notification is-warning" v-if="formError.length > 0" v-text="formError"></div>
      </div>

      <div class="field">
        <p class="control">
            <button class="button is-success">
                Login
            </button>
        </p>
    </div>

    </form>
</div>
    
</template>

<script>
export default {
    name: 'LoginForm',
    data(){
        return {
            email:'',
            password:'',
            formError:''
        }
    },
    computed: {
        invalidEmail(){
            return false
        },
        invalidPassword(){
            return false
        },
        loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
        signIn(){
            this.formError ='',
            this.$store.dispatch('userLogin', {
                email: this.email,
                password: this.password
            }).then(() =>{
                this.$router.push('contact')
            })
            .catch((error) =>{
                this.formError = error.message
            })
        }
    }

}
</script>

<style>

</style>
