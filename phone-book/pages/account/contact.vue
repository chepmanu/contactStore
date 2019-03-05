<template>
<div>
      <div>
        <app-create-contact>
        </app-create-contact>
      </div>

      <div>
        <app-view-contacts>
        </app-view-contacts>
      </div>
</div>
</template>

<script>
  import AddPost from "@/components/AddPost"
  import ViewContacts from "@/components/ViewContacts"
  export default {
    middlewares: 'router-auth',
    components: {
      appCreateContact: AddPost,
      appViewContacts: ViewContacts,
    }
  }
</script>