<template>
  <button
    :style="isActive ? { fontWeight: 'bold' } : null"
    :disabled="isDisabled"
    @click="onClick"
  >{{ value }}</button>
</template>

<script>
export default {
  props: ['value', 'isActive', 'isDisabled'],
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

