<template>
   <section class="container conten-personaje">
        <div class="detalles">
            <div class="conten-img">
                <img :src="character.sprites.front_default" class="img">
            </div>
            <div class="row justify-content-md-center">
                <div class="conten-detail">
                    <h2 class="title">{{ character.name }}</h2>
                    <p>Peso: {{ character.weight }}</p>
                    <p>Altura: {{ character.height }}</p>
                    <p>Habilidades: <span v-for="ability in character.abilities" :key="ability.id"> {{ability.ability.name}},</span></p>
                    <!-- <p>Peliculas: <span v-for="move in character.moves" :key="move.id"> {{move.move.name}}</span></p> -->
                </div>
            </div>
        </div>
    </section>
   
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const characters = createNamespacedHelpers('characters');
export default {
     name: "CharacterView",
      async mounted() {
            try {
                await this.getCharacter(this.$route.params.id)
            } 
            catch (error) {
                console.error(error);
            }
        },
        
        computed: {
            ...characters.mapGetters(['character']),
        },
        methods: {
            ...characters.mapActions(['getCharacter']),
        },
}
</script>

<style>
.conten-personaje{
    height: 93vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.detalles{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.conten-img{
    height: 350px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 10px 10px 10px black;
    border: 2px solid #3A5DA8;
    border-radius: 300px;
    z-index: 1;
}
.img{
    height: 330px;
    width: 330px;
}
.conten-detail{
    padding: 40px;
    width: 550px;
    background-color: #3a5da898;
    margin-left: -80px;
    border: 2px solid #FFCB05;
    box-shadow: 10px 10px 10px black;
    border-radius: 0 50px 50px 0;
}
.title{
    color: #fdea9f;
}
.conten-detail p{
    color: white;
}
</style>
