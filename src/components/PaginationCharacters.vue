<template>
  <div class="conten-paginador">
    <button @click="paginationRoute(pagination.previous)" v-if="pagination.previous" class="btn btn-primary">Anterior</button>
    <button @click="paginationRoute(pagination.next)" class="btn btn-primary">Siguiente</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const characters = createNamespacedHelpers('characters');
export default {
    name: "PaginationCharacters",
    
    computed: {
        ...characters.mapGetters(['pagination'])
    },

    methods: {
      ...characters.mapActions(['getCharacters']),
        paginationRoute (url) {
           this.getCharacters(url) 
        }
    }
}
</script>

<style>
.conten-paginador{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn{
    background-color: #f8d95d;
    box-shadow: 5px 5px 10px black;
    color: black;
    margin: 7px;
}

.btn:hover{
    background-color: #FFCB05;
    border: none;
}

</style>