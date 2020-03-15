<template>
  <div>
      <h4>Filter Todos:</h4>
      <div>
          <select @change="handleFilter">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>
      </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {

        }
    },
    methods:{
        ...mapActions(['filterTodos']),
        handleFilter(e){
            this.filterTodos(e);
        }
    }
    
}
</script>

<style>

</style>