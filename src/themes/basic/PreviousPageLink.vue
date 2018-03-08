<template>
  <button
    :disabled="isDisabled"
    @click="onClick"
  >Prev</button>
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

