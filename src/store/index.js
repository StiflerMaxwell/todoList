import { createStore } from 'vuex'

const store = createStore({
    state : {          
            ttodos: [],
            todoList: [], 
        },
    getters: {
        allTTodos: (state) => state.ttodos,
        allTodos: (state) => state.todoList,
        done: (state) => state.done,
    },
    actions: {
        set_as_done({ commit }) {
        commit("set_as_done");
        },
        load({commit}, list) {
            commit("load",list)
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
            state.todoList = [...list] 
        },
        add(state, item) {
        state.todoList.push(item);
        state.ttodos = state.todoList;
        },  
        update(state, item) {
        let index = state.todoList.findIndex((t) => t.id == item.id);
        if (index != -1) {
            state.todoList[index] = item;
        }
        },
        delete(state, id) {
            state.todoList = state.todoList.filter((todo) => todo.id != id);
            state.ttodos = state.todoList;
        },
        set_as_done(state) {
        state.ttodos = state.todoList;
        state.done = state.done == true ? false : true;
        state.ttodos = state.ttodos.filter((t) => t.done == state.done);
        },
    },
    modules: {},
});
 

 export default store

