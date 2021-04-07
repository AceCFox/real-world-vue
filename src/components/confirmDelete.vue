<template>
    <!-- <transition name = "modal" @close ="closeModal"> -->
        <div class = "modal-mask" >
            <div class = "modal-container">
                <div class = "modal-header">
                    <h3>Are you sure you want to delete this event?</h3>
                </div>
                <div class = "button-container">
                    <button @click="yesDelete">Yes</button>  
                    <button @click="closeModal">No</button>
                </div>
            </div>
        </div> 
    <!-- </transition>    -->
</template>

<script>
export default {
  name: "ConfirmDelete",
  props: {
    visible: Boolean,
    id: Number,
  },
  methods:{
      closeModal(){
          this.$emit('closeModal')
      },
      yesDelete(){
           this.$store.dispatch('event/deleteEvent', this.id) .then(() => {
                this.$emit('closeModal')
                this.$router.push({
                    name: 'EventList'
                })
            }).catch((err) => {
                console.log('error encountered in event delete:', err)
            })
      }
  }
};
</script>

<style scoped>
h2{
    font-style: italic;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

}

.modal-container {
  width: 300px;
  margin:  auto;
  margin-top: 10vh;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.button-container{
    justify-content: space-between;
}
</style>