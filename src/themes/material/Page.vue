<template>
  <md-button
    :style="{ minWidth: '36px' }"
    :class="{ 'md-primary' : isActive }"
    :disabled="isDisabled"
    @click="onClick"
  >{{ value }}</md-button>
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

