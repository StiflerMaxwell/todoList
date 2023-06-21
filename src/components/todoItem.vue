<template>
    <div class="card p-0 w-100 my-1  cursor justify-content-center"  :class="itemObj.completed?'text-bg-success':'text-bg-warning'"  >
        <div class="card-header d-flex justify-content-between">
            #{{indexs + 1}}
            <button type="button" class="btn-close" aria-label="Close" @click="deleteItem"></button>
        </div>
        <div class="card-body d-flex" @click="clicked" :class="{'line-through':itemObj.completed}">   
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
            :checked="itemObj.completed">         
            <p class="card-text mx-1">{{itemObj.todo}}</p>         
        </div>
        <div class="card-footer text-body-secondary d-flex justify-content-between">
            {{moment(itemObj.date).format('YYYY-MM-DD HH:mm:ss')}}
            <button type="button" class="btn btn-danger btn-sm" @click="EditContent">Edit</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: {
        itemObj: {
            type: Object,
            default:() => {}
        },
        indexs: {
           type: Number,
           default: 0 
        }
    },  
    data() {
        return {
            moment
        }
    },
    methods: {
        clicked(e) {
            const hasStatus = e.target.checked
            this.$store.dispatch('set_status', {
                id:this.itemObj.id, 
                isDone: hasStatus?e.target.checked:!this.itemObj.completed
            })          
        },
        EditContent() {       
            this.$emit('update',this.itemObj)
        },
        deleteItem() {
            this.$store.dispatch('deleteTodo',this.itemObj.id)
        }
    },
}
</script>

<style scoped>
  .line-through {
    text-decoration-line: line-through;
  }
  .cursor {
    cursor: pointer;
  }
</style>
