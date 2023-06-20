<template>
  <div class="container overflow-hidden text-center">
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
export default {
    components:{todoItem},
    data() {
        return {
            jsonTodos,
            todoLists:[],
            isloadingJson:false
        }
    },
    methods: {
        loadjSON() {
            this.todoLists = []
            this.isloadingJson = true        
            setTimeout(() => {
                this.todoLists = [...this.jsonTodos]  
                this.isloadingJson = false
            }, 1000);   
        }
    },
}
</script>

<style>

</style>