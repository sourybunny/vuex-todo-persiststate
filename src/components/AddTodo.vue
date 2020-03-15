<template>
  <div>
      <h2>Add Todo</h2>
      <input type="text" placeholder="add todo" v-model = title>
      
      <input type="submit" value="submit" @click.prevent="submitTodo">
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return  {
            title: ''
        }
    },
    methods: {
        ...mapActions(['postTodo']),
        submitTodo(){
            this.postTodo(this.title);
        }
    },
    computed: {

    }
}
</script>

<style>

</style>