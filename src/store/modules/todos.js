import axios from 'axios';

const state = {
    todos: []
};

const getters  = {
    getTodos: (state)=>state.todos
};

const actions = {
    async fetchTodos({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', res.data)
    },
    async postTodo({commit}, title){
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title, completed: false
        })
        commit('postTodo',res.data)
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('deleteTodo', id);
    },
    async filterTodos({commit},e){
        const limit = parseInt(e.target.value);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
        commit('setTodos', res.data);
    },
    async editTodo({commit},todo){
        const res  = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo)
        commit('editTodo',res.data);
        // commit('setTodos', res.data);
    }
}; 

const mutations = {
    setTodos: (state,payload)=> state.todos = payload,
    postTodo: (state,payload)=> state.todos.unshift(payload),
    deleteTodo: (state,payload)=> state.todos= state.todos.filter(todo=>todo.id!==payload),
    editTodo: (state,payload)=> {
        let index  = state.todos.findIndex(todo=>todo.id == payload.id);
        if(index>0){
            state.todos.splice(index,1,payload);
        }
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}