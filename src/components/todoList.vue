<template>
  <div class="container overflow-hidden text-center">
        <div class="container text-center">
             <div class="form-floating  row ">
                <input class="form-control" type="text" id="floatingInput" placeholder="todo Item" 
                    v-model="inputItems"
                @keyup.enter="enterItem">
                <label for="floatingInput">todo Item</label>           
            </div>
            <button @click="enterItem" class="btn btn-primary">Add</button>
        </div>
  
    <div class="d-flex justify-content-center ">
        <button type="button" class="btn btn-primary" @click="loadjSON" :disabled="isloadingJson">          
            <span v-if="!isloadingJson"> loadjSON</span>
            <div v-else>
                <span :class="isloadingJson?'spinner-grow spinner-grow-sm':''" role="status" aria-hidden="true"></span>
                Loading...
            </div>       
        </button>

        <button type="button" class="btn btn-success mx-2">Success</button>
    </div>
      
    
   
    <todo-Item 
        v-for="item in todoLists" 
        :key="item.id" 
        :itemObj="item">
    </todo-Item>            
  </div>
</template>

<script>
import jsonTodos from "../assets/todos.json"
import todoItem from "./todoItem.vue"
import {generate} from "shortid"
export default {
    components:{todoItem},
    data() {
        return {
            jsonTodos,
            inputItems:'',
            todoLists:[],
            isloadingJson:false
        }
    },
    mounted() {
       
    },
    methods: {
        loadjSON() {
            this.todoLists = []
            this.isloadingJson = true        
            setTimeout(() => {
                this.todoLists = [...this.jsonTodos]  
                this.isloadingJson = false
            }, 1000);   
        },
        enterItem() {
            console.log(this.$store.state)
            const data = {
                id: generate(),
                todo: this.inputItems,
                done:false
            }      

            this.inputItems = ''
        }
    },
}
</script>

<style>

</style>