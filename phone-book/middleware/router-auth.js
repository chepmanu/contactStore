export default function(context) {
    // if user is not loged in send to login page, otherwise contiue
    if (context.store.getters.user === null || context.store.getters.user === undefined) {
        context.redirect('/account/login');
    }
}