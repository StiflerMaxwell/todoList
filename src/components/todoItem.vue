<template>
    <div>
       <span>{{itemObj.todo}}</span>
    </div>
</template>

<script>

export default {
    props: {
        itemObj: {
            type: Object,
            default:() => {}
        }
    },  
}
</script>

<style scoped>
 
</style>
