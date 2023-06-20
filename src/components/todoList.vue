<template>
  <div class="container overflow-hidden text-center">
        <div class="container text-center d-flex justify-content-center">
             <div class="form-floating  col-10">
                <input class="form-control" type="text" id="floatingInput" placeholder="todo Item" 
                    v-model="inputItems"
                @keyup.enter="enterItem">
                <label for="floatingInput">todo Item</label>           
            </div>
            <div  class="mx-2">
                <button @click="enterItem" class="btn btn-outline-primary btn-lg">Add</button>
            </div>       
        </div>
  
    <div class="d-flex justify-content-center my-2">
        <button type="button" class="btn btn-primary" @click="loadjSON" :disabled="isloadingJson">          
            <span v-if="!isloadingJson"> loadjSON</span>
            <div v-else>
                <span :class="isloadingJson?'spinner-grow spinner-grow-sm':''" role="status" aria-hidden="true"></span>
                Loading...
            </div>       
        </button>

        <button type="button" class="btn btn-success mx-2">Success</button>
    </div>
      
    
   <div v-for="item in todoLists"  :key="item.id" class="d-flex">
    <todo-Item 
        :itemObj="item">
    </todo-Item>   
   </div>
             
  </div>
</template>

<script>
import jsonTodos from "../assets/todos.json"
import todoItem from "./todoItem.vue"
import {generate} from "shortid"
import moment from 'moment'
export default {
    components:{todoItem},
    data() {
        return {
            jsonTodos,
            inputItems:'',        
            isloadingJson:false
        }
    },
    computed: {
        todoLists() {
            return this.$store.getters.allTodos         
        }
    },  
    mounted() {
       
    },
    methods: {
        loadjSON() {
            //loading animation
            this.isloadingJson = true  
            //clear the array List
            this.$store.dispatch('clearList')
            setTimeout(() => {
                //load from the Json file
                this.$store.dispatch('load',jsonTodos)              
                this.isloadingJson = false
            }, 500);   
        },
        enterItem() {
            const data = {
                id: generate(),
                todo: this.inputItems,
                done:false,
                date: moment()
            }    
            // if has input value 
            if(this.inputItems) {
                // adding to the store
                this.$store.dispatch('addTodo',data) 
                // clear the form input
                this.inputItems = ''
            }
        }
    },
}
</script>

<style>

</style>