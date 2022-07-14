<template>
   <section class="container personaje">
        <div class="personaje__detalles">
            <div class="personaje__img">
                <img :src="character.sprites.front_default" class="personaje__imagen">
            </div>
            <div class="row justify-content-md-center">
                <div class="personaje__detail">
                    <h2 class="personaje__title">{{ character.name }}</h2>
                    <p class="personaje__parrafo">Peso: {{ character.weight }}</p>
                    <p class="personaje__parrafo">Altura: {{ character.height }}</p>
                    <p class="personaje__parrafo">
                        Habilidades: 
                        <span v-for="ability in character.abilities" :key="ability.id"> {{ability.ability.name}},</span>
                    </p>
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
.personaje{
    height: 93vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.personaje__detalles{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.personaje__img{
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
.personaje__imagen{
    height: 330px;
    width: 330px;
}
.personaje__detail{
    padding: 40px;
    width: 550px;
    background-color: #3a5da898;
    margin-left: -80px;
    border: 2px solid #FFCB05;
    box-shadow: 10px 10px 10px black;
    border-radius: 0 50px 50px 0;
}
.personaje__title{
    color: #fdea9f;
}
.personaje__parrafo{
    color: white;
}
</style>
