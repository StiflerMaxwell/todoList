<template>
  <div class="container overflow-hidden text-center ">
        <div class="container text-center d-flex justify-content-center align-items-center sticky-top">
            <div class="form-floating  col-10">
                <input class="form-control" type="text" id="floatingInput"   placeholder="todo Item" 
                    v-model="inputItems"
                @keyup.enter="enterItem">
                <label for="floatingInput">todo Item</label>           
            </div>
            <div  class="mx-2">
                <button @click="enterItem" class="btn btn-outline-primary btn-lg">Add</button>
            </div>       
        </div>
  
    <div class="d-flex justify-content-center my-2 ">
        <button type="button" class="btn btn-primary" @click="loadjSON" :disabled="isloadingJson">          
            <span v-if="!isloadingJson"> loadjSON</span>
            <div v-else>
                <span :class="isloadingJson?'spinner-grow spinner-grow-sm':''" role="status" aria-hidden="true"></span>
                Loading...
            </div>       
        </button>
        <button type="button" class="mx-2 btn btn-success" @click="fetchJson" :disabled="isloadingFetch">          
            <span v-if="!isloadingFetch">fetchDummy</span>
            <div v-else>
                <span :class="isloadingFetch?'spinner-grow spinner-grow-sm':''" role="status" aria-hidden="true"></span>
                Loading...
            </div>       
        </button>      
    </div>
      
    <div class="overflow p-2">
        <div v-for="item,index in todoLists"  :key="item.id" class="d-flex ">
        <todo-Item 
            @update="update"
            :indexs="index"
            :itemObj="item">
        </todo-Item>   
    </div>
    </div>
  
    <edit-modal ref="editModal"></edit-modal>                 
  </div>
</template>

<script>
import jsonTodos from "../assets/todos.json"
import todoItem from "./todoItem.vue"
import {generate} from "shortid"
import editModal from "./editModal.vue"
import moment from 'moment'
export default {
    components:{todoItem,editModal},
    data() {
        return {
            jsonTodos,
            inputItems:'',        
            isloadingJson:false,
            isloadingFetch:false   
        }
    },
    computed: {
        todoLists() {
            return this.$store.getters.allTodos         
        }
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
        fetchJson() {
            //loading animation
            this.isloadingFetch = true  
            //clear the array List
            this.$store.dispatch('clearList')
            fetch('https://dummyjson.com/todos') 
            .then(res => res.json())
            .then( res => {
                this.isloadingFetch = false  
                this.$store.dispatch('load',res.todos)
                }              
            );          
        },  
        enterItem() {
            const data = {
                id: generate(),
                todo: this.inputItems,
                completed:false,
                date: moment()
            }    
            // if has input value 
            if(this.inputItems) {
                // adding to the store
                this.$store.dispatch('addTodo',data) 
                // clear the form input
                this.inputItems = ''
            }
        },
        update(item) {
           this.$refs.editModal.open(item)
        }
        
    },
}
</script>

<style lang="scss" scoped>

.overflow {
    overflow-y: auto;
    height: 70vh;
}
</style>