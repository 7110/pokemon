<template>
  <input type="text" class="Input" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Input {
  width: 100%;
  max-width: $pokemon-base * 70;
  height: $pokemon-base * 10;
  padding: 0 $pokemon-base;

  font-size: 16px;
  transform: scale(calc(14 / 16));

  display: block;
  border: 1px solid #ccc;
}
</style>
