<template>
  <main class="checker">
    <h1>夢特性/タマゴ技</h1>
    <Input :value="keyword" @input="value => update({value})" />
    <Pokemons v-if="list.length" :pokemons="list" />
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Input from '~/components/atoms/Input'
import Pokemons from '~/components/Pokemons'

const data = require('~/assets/data.json')

export default {
  name: 'Checker',
  components: {
    Input,
    Pokemons
  },
  data () {
    return { data }
  },
  head () {
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0' }
      ]
    }
  },
  computed: {
    ...mapState('checker', ['keyword']),
    list () {
      return data.filter((pokemon) => {
        if (this.keyword) {
          return pokemon.name.indexOf(this.keyword) === 0 || pokemon.hiragana.indexOf(this.keyword) === 0
        }
      })
    }
  },
  methods: {
    ...mapMutations('checker', ['update'])
  }
}
</script>

<style lang="scss">
.checker {
  > .Input {
    margin: $pokemon-base * 5 auto 0;
  }

  > .Pokemons {
    margin-top: $pokemon-base * 5;
  }
}

</style>
