<template>
    <section class="container">
        <div class="row justify-content-md-center">
            <div v-for="character in characters" :key="character.id" class="col col-lg-4">
                <CardCharacter :character="{...character}"/>
            </div>
        </div>
        
        <PaginationCharacters />
        <hr/>
    </section>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    import CardCharacter from '../components/CardCharacter.vue'
    const characters = createNamespacedHelpers('characters');
    import PaginationCharacters from '@/components/PaginationCharacters.vue';
    export default {
        name: "ListCharacters",

        async mounted() {
            await this.getCharacters();  
        },
        
        computed: {
            ...characters.mapGetters(['characters'])
        },
        methods: {
            ...characters.mapActions(['getCharacters']),
        },
        components: {
            CardCharacter,
            PaginationCharacters
        }
    };
</script>

<style>

</style>