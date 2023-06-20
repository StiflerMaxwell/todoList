<template>
    <div @click="clicked" :class="{'line-through':itemObj.done}" class="d-flex justify-content-center">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
         :checked="itemObj.done">   
        <div class="mx">         
            <p>{{itemObj.todo}}</p>
            <p>{{moment(itemObj.date).format('YYYY-MM-DD HH:MM:SS')}}</p>       
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
                isDone: hasStatus?e.target.checked:!this.itemObj.done
            })          
        }
    },
}
</script>

<style scoped>
  .line-through {
    text-decoration-line: line-through;
  }
</style>
