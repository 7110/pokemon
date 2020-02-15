<template>
  <div class="Pokemons">
    <div v-for="(pokemon, index) in pokemons" :key="index" class="Pokemons_result">
      <div class="Pokemons_row">
        <h2 class="">
          {{ pokemon.name }}
        </h2>
      </div>

      <div class="Pokemons_row">
        <h3>特性</h3>
        <ul class="Pokemons_list">
          <li v-for="(characteristic, cIndex) in pokemon.characteristics" :key="cIndex">
            {{ characteristic }}
          </li>
        </ul>
      </div>

      <div class="Pokemons_row">
        <h3>夢特性</h3>
        <ul class="Pokemons_list">
          <li v-for="(dream_characteristic, dIndex) in pokemon.dream_characteristics" :key="dIndex">
            {{ dream_characteristic }}
          </li>
        </ul>
      </div>

      <div class="Pokemons_row">
        <h3>卵技</h3>
        <ul class="Pokemons_list">
          <li v-for="(egg_skill, eIndex) in pokemon.egg_skills.sort()" :key="eIndex">
            {{ egg_skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pokemons',
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Pokemons {
  &_result + &_result {
    margin-top: $pokemon-base * 10;
  }

  &_row + &_row {
    margin-top: $pokemon-base * 3;
  }

  &_list {
    margin-top: $pokemon-base * 2;
    padding-left: 1em;
  }
}
</style>
