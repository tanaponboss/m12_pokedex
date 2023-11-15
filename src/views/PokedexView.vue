<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import PokedexService from '../services/PokedexService';

const pokedex = ref(null)

onMounted(() => {
    PokedexService.getPokedex()
  .then((response)=> {
    pokedex.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div class="products">
    <div class="pokemonCards">
      <PokemonCard v-for="pokemon in pokedex" :key="pokemon.id" :pokemon="pokemon" /> <!--display-->
    </div>
  </div>
</template>

<style>
.products {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pokemonCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  
}

@font-face {
  font-family: 'Agbalumo-Regular';
  src: url(../assets/fonts/Agbalumo-Regular.ttf);
}

</style>