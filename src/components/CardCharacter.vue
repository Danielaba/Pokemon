<template>
    <div class="card">
        <img :src="character.sprites.front_default" class="card-img-top" alt="Pokemon">
        <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <router-link :to="{ name: 'CharacterView' , params: { id: character.id }}"  class="btn btn-primary">Ver detalle</router-link>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
      character: {
        type: Object,
      },
    },

    methods: {
        characterView (character) {
            this.$router.push({
                name: 'CharacterView', params: {id: character.id}
            })
        }
    },

    // mounted () {
    //     console.log(this.character)
    // }
}
</script>

<style>
.card{
    width: 18rem;
    border: 2px solid #3A5DA8;
    box-shadow: 5px 5px 10px black;
    margin-top: 50px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.548);
    border-radius: 10px;
}

.card:hover{
    border: 2px solid #FFCB05;
}

.card-body{
    background-color: #3a5da898;
    border-top: 2px solid #3A5DA8;
    border-radius: 0px 0px 8px 8px;
}

.card-body:hover{
    border-top: 2px solid #FFCB05;
}

.card-title{
    color: white;
    font-size: 30px;
    text-shadow: 1px 1px 3px blue;
}

.btn{
    background-color: #f8d95d;
    box-shadow: 5px 5px 10px black;
    color: black;
}

.btn:hover{
    background-color: #FFCB05;
    border: none;
}
</style>