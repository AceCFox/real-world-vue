<template>
  <div class="home">
    <div class = "events">
      <h1>Events For Good</h1>
      <EventCard v-for="event in events" :key = "event.id" :event="event" />
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
    ...mapState(['events'])}
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>