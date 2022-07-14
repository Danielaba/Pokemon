<template>
    <div class="card">
        <img :src="character.sprites.front_default" class="card-img-top" alt="Pokemon">
        <div class="card-body card__contenido">
            <h5 class="card-title card__titulos">{{ character.name }}</h5>
            <router-link :to="{ name: 'CharacterView' , params: { id: character.id }}"  class="btn btn-primary card__boton">Ver detalle</router-link>
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

.card__contenido{
    background-color: #3a5da898;
    border-top: 2px solid #3A5DA8;
    border-radius: 0px 0px 8px 8px;
}

.card__contenido:hover{
    border-top: 2px solid #FFCB05;
}

.card__titulos{
    color: white;
    font-size: 30px;
    text-shadow: 1px 1px 3px blue;
}

.card__boton{
    background-color: #f8d95d;
    box-shadow: 5px 5px 10px black;
    color: black;
}

.card__boton:hover{
    background-color: #FFCB05;
    border: none;
}
</style>