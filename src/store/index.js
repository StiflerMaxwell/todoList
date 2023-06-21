import { createStore } from 'vuex'

const store = createStore({
    state : {           
            todoList: [], 
        },
    getters: {  
        allTodos: (state) => state.todoList,  
    },
    actions: {
        set_status({commit}, {id, isDone}) {         
            commit("set_as_done", {id, isDone});
        },
        load({commit}, list) {
            commit("load",list)
        },
        clearList({commit}, list) {
            commit("clear",list)
        },
        addTodo({ commit }, todo) {
            commit("add", todo);
        },
        deleteTodo({ commit }, id) {
            commit("delete", id);
        },
        updateTodo({ commit }, todo) {
            commit("update", todo);
        },
    },
    mutations: {
        load(state,list) {
            list.forEach(item => {
                item.completed = false
                item.date = new Date()
            });      
            state.todoList = [...list] 
        },
        add(state, item) {
            state.todoList.push(item);       
        },  
        update(state, item) {        
            let index = state.todoList.findIndex((t) => t.id === item.id);         
            if (index !== -1) {
                state.todoList[index] = {...item};              
            }        
        },
        delete(state, id) {
            state.todoList = state.todoList.filter((todo) => todo.id !== id);       
        },
        clear(state) {
            state.todoList = []
        },
        set_as_done(state,{id,isDone}) {  
            let index = state.todoList.findIndex((t) => t.id === id);   
            if (index != -1) {
                state.todoList[index].completed = isDone;
            }           
        },
    },
    modules: {},
});
 

 export default store

