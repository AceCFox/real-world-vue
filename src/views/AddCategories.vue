<template>
    <ConfirmDelete 
        v-if="deleteModalOpen" 
        @closeModal = "toggleModal"  
        type = 'category'
        :category = "catToDelete"
        />
    <h3>Add A Category</h3>
    <BaseInput
        label="New Category"
        type="text"
        v-model="newCategory"
    />
    <!-- <p>{{newCategory}}</p> -->
    <button @click="clickedAdd">Add</button>
    <h3>Remove A Category</h3>
    <ul>
        <li v-for="cat in categories" :key="cat"> {{cat}} <button @click="onX(cat)">X</button></li>
    </ul>
    <br/>
    <button @click="clickedBack" class = "back">Back to Create!</button>
</template>

<script>
import BaseInput from '../components/BaseInput.vue'
import ConfirmDelete from "@/components/ConfirmDelete.vue";

export default {
    name: "AddCategories",
    components: {
        BaseInput,
        ConfirmDelete,
      },
    data(){
        return {
            newCategory: '',
            deleteModalOpen: false,
            catToDelete: ''
        }
    },
    methods:{
        clickedBack(){
            this.$router.push({
                    name: 'EventCreate'
                })
        },
        clickedAdd(){
            this.$store.dispatch('categories/add', this.newCategory)
            this.newCategory = ''
        },
        onX(category){
            this.catToDelete = category;
            this.toggleModal()
        },
        toggleModal(){
            this.deleteModalOpen = !this.deleteModalOpen
        }
    },
    computed:{
        categories(){
            return this.$store.state.categories.categories
        }
    }

}
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  cursor: pointer;
}
.back{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.add {
    color:green
}
</style>