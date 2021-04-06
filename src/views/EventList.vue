<template>
  <div class="home">
    <div class = "events">
      <h1>Events For Good</h1>
      <EventCard v-for="event in events" :key = "event.id" :event="event" />
      <div id = "nav">
        <template v-if="page !=1">
          <router-link :to="{name: 'EventList', query: {page: page-1} }" rel = "prev"> Previous Page </router-link>
        </template>
        <span v-show="1<page && page<maxPage">|</span>
        <template v-if="page<maxPage">
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
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page(){
      return parseInt(this.$route.query.page) || 1
    }, 
    ...mapState(['events', 'maxPage'])}
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>