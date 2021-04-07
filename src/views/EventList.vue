<template>
  <div class="home">
    <div class = "events">
      <h1>Events for {{user.user.name}}</h1>
      <EventCard v-for="event in event.events" :key = "event.id" :event="event" />
      <div id = "nav">
        <template v-if="page !=1">
          <router-link :to="{name: 'EventList', query: {page: page-1} }" rel = "prev"> Previous Page </router-link>
        </template>
        <span v-show="1<page && page<event.maxPage">|</span>
        <template v-if="page<event.maxPage">
          <router-link :to="{name: 'EventList', query: {page: page+1} }" rel = "next"> Next Page </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { mapState } from 'vuex';

export default {
  name: "EventList",
  components: {
    EventCard
  },
  created(){
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page(){
      return parseInt(this.$route.query.page) || 1
    }, 
    ...mapState(['event', 'user'])}
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>