<template>
  <md-button
    :style="{ minWidth: '36px' }"
    :disabled="isDisabled"
    @click="onClick"
  >
    <md-icon>first_page</md-icon>
  </md-button>
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

