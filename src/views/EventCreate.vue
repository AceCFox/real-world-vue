<template>
    <h1>Create an Event</h1>
</template>

<script>
import { mapState } from 'vuex'

export default{
    computed:{
        catLength(){
            return this.$store.getters.catLength;
        },
        ...mapState( ['user', 'categories'] )
    }
}
</script>
