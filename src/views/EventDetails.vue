<template>
    <div v-if="event">
        <div class="event-header">
        <span class="eyebrow">@{{ event.time }} on {{ event.date || date }}</span>
        <h1 class="title">{{ event.title }}</h1>
        <h5>Organized by {{ event.organizer ? event.organizer.name? event.organizer.name : event.organizer : '' }}</h5>
        <h5>Category: {{ event.category }}</h5>
        </div>

        <h2>Location</h2>

        <address>{{ event.location }}</address>

        <h2>Event details</h2>
        <p>{{ event.description }}</p>

        <h2>
        Attendees
        <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>
        </h2>
        <ul class="list-group">
        <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
            <b>{{ attendee.name }}</b>
        </li>
        </ul>
        <button class="delete-btn" v-on:click="clickedDelete">Delete Event</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    props: ['id'],
    created(){
        this.fetchSingleEvent(this.id)
    },
    computed:  mapState ({
        event: state => state.event.event
    }),
    methods: {
        clickedDelete(){
            alert('you did it bb you clicked delete!')
        },
       ...mapActions('event', ['fetchSingleEvent']) 
    }
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.delete-btn{
    margin-top: 15px;
    margin-bottom: 50px;
    border-radius: 5px;
    border-style: none;
    padding: 5px 10px;
    font-family: sans-serif;
    background: linear-gradient(to right, #8d144d, #cf8f6a);
    color: rgb(255, 251, 251);
    cursor:pointer;
    font-size: 120%;
}
.delete-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.delete-btn:active{
  transform: translateY(4px)
}
</style>