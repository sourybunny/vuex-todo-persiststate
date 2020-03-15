<template>
    <div>
        <h1>todos</h1>
        <AddTodo></AddTodo>
        <FilterTodos/>
        <div :class="{'completed':todo.completed}" v-for = "todo in getTodos" :key="todo.id">
            {{todo.title}}
            <button @click="deleteTodo(todo.id)">delete</button>
            <button @click="updateTodo(todo)">mark completed</button>
        </div>
    </div>
</template>

<script>
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos'
import {mapGetters, mapActions} from 'vuex';
export default {
    name : 'Todos',
    components: {
        AddTodo,
        FilterTodos
    },
    methods: {
        ...mapActions(['fetchTodos','deleteTodo','editTodo']),
        updateTodo(todo){
            const uptodo = {
                id: todo.id,
                title : todo.title,
                completed: !todo.completed
            }
            this.editTodo(uptodo);
        }
    },
    computed: {
        ...mapGetters(['getTodos'])
        },
    created(){
        this.fetchTodos();
    }
    
}
</script>
<style  scoped>
.completed {
    background: grey;
    color: white;
}
</style>