<template>
  <div class="paginador">
    <button @click="paginationRoute(pagination.previous)" v-if="pagination.previous" class="btn btn-primary paginador__boton">Anterior</button>
    <button @click="paginationRoute(pagination.next)" class="btn btn-primary paginador__boton">Siguiente</button>
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
.paginador{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paginador__boton{
    background-color: #f8d95d;
    box-shadow: 5px 5px 10px black;
    color: black;
    margin: 7px;
}

.paginador__boton:hover{
    background-color: #FFCB05;
    border: none;
}

</style>