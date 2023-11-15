<script setup>
import { ref, onMounted } from 'vue'
import PokedexService from '@/services/PokedexService.js'

const pokemon = ref(null)
// const id = ref(100001)

const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    console.log('Fetching Pokemon for ID:', props.id);
    //BookService.getBook(id.value)
    PokedexService.getPokemon(props.id)
    .then((response)=>{
        pokemon.value = response.data
    })
    .catch((error)=>{
        console.log(error)
    })
})
</script>

<template>
    <div class="pokemon" v-if="pokemon">
        <img :src="pokemon.imageUrl" alt="Pokemon Image" />
        <h1 id="pokemon-name">{{  pokemon.name }}</h1>
        <p><strong>Type1:</strong> {{ pokemon.type1 }} </p>
        <p><strong>Type2:</strong> {{ pokemon.type2 }} </p>
        <p><strong>Japanese Name:</strong> {{ pokemon.japaneseName }}</p>
        <p><strong>Evolution:</strong> {{ pokemon.evolution }}</p>
    </div>
</template>

<style>
.pokemon {
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 20px;
    padding: 60px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
}
h1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Agbalumo-Regular';
}
p {
    font-family: 'Inter';
}
img {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
}
</style>