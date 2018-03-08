<template>
  <button
    :disabled="isDisabled"
    @click="onClick"
  >Next</button>
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

