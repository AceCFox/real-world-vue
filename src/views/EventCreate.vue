<template>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
          <label>Select a category</label>
          <select v-model="event.category">
            <option v-for="cat in categories.categories" :key="cat">{{ cat }}</option>
          </select>
          <h3>Name & describe your event</h3>
            <BaseInput
                label="Title"
                v-model="event.title"
                type="text"
                />
            
            <BaseInput
                v-model="event.description"
                label="Description"
                type="text" />
            <h3>Where is your event?</h3>
            <BaseInput
                v-model="event.address"
                label="Address"
                type="text" />
          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="Select a date"/>
          </div>
          <div class="field">
            <label>Select a time</label>
            <select v-model="event.time">
              <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>
          <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
</template>

 <script>
    import Datepicker from 'vue3-datepicker'
    import BaseInput from "@/components/BaseInput.vue";
    export default {
      components: {
        Datepicker,
        BaseInput
      },
      data() {
        const times = []
        for (let i = 1; i <= 24; i++) {
          times.push(i + ':00')
        }
        return {
          event: this.createFreshEvent(),
          times,
          categories: this.$store.state.categories,
        }
      },
      methods: {
        createFreshEvent() {
          const user = this.$store.state.user.user
          const id = Math.floor(Math.random() * 10000000)
          return {
            id: id,
            category: '',
            organizer: user,
            title: '',
            description: '',
            location: '',
            date: '',
            time: '',
            attendees: []
          }
        },
        createEvent(){
            this.$store.dispatch('event/createEvent', this.event) .then(() => {
                this.$router.push({
                    name: 'EventDetails',
                    params: { id: this.event.id}
                })
                this.event = this.createFreshEvent()
            }).catch((err) => {
                console.log('error encountered in event post:', err)
            })
        }
      }
    }
    </script>

<style scoped>
    .field{
        margin-bottom: 24px;
    }
</style>