<template>
  <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Todo Item</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="col-12">
            <input class="form-control" type="text" ref="myInput" id="myInput" placeholder="todo Item" 
                v-model="item.todo"
            @keyup.enter="enterItem">                      
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updated">Save</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
export default {
    data() {
        return {
            item:{},
            modal:''
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById('myModal'))    
    },
    methods: {
        open(item) {
            this.item = {...item}
            this.modal.show()           
        },
        updated() {
            this.item.date = new Date()
            this.$store.dispatch('updateTodo',this.item)
            setTimeout(() => {
                this.modal.hide()
            }, 200);
        }
    },
}
</script>

<style>

</style>