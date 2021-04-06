<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>  {{ event.time }} on {{ event.date.slice(0,10) }} @ {{ event.location }}</p>
        <h4>Category: {{event.category}}</h4>
        <h5>Organized by {{ event.organizer.name  ? event.organizer.name : event.organizer }}</h5>
        <p>  {{ event.description }}  </p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js';
export default {
    props: ['id'],
    data(){
        return {
            event: null
        }
    },
    created(){
        EventService.getEvent(this.id)
            .then((response) => {
            this.event = response.data;
        })
        .catch(error => {
            alert(`oh no server request failed! Check the console for details!`)
            console.log('error getting events: ', error)
        })
    }
}
</script>