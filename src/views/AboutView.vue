<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
//import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

import PokemonCard from '@/components/PokemonCard.vue'


// create an empty array
const pokemons = ref([])

async function getPokemons() {

  onSnapshot(collection(db, 'pokedex'), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
      let pokemon = {
        "id": doc.id,
        "name": doc.data().Name,
        "type1": doc.data().Type1,
        "type2": doc.data().Type2,
        "japaneseName": doc.data().JapaneseName,
        "evolution": doc.data().Evolution,
        "image_url": doc.data().image_url,
        "firebase": doc.data().firebase
      }
      // add the object to the array
      pokemons.value.push(pokemon)
  });
})
}

onMounted(async () => {
    console.log("Connecting to Firebase")
    await getPokemons()
    console.log(pokemons.value)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="pokemons">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
