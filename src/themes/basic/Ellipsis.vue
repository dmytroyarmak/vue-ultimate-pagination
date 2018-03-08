<template>
  <button
    :disabled="isDisabled"
    @click="onClick"
  >...</button>
</template>

<script>
export default {
  props: ['isDisabled'],
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

