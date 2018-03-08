<template>
  <div>
    <div>
      <component
        v-for="item in paginationModel"
        :key="item.key"
        :is="itemTypeToComponent[item.type]"
        :value="item.value"
        :is-active="item.isActive"
        :is-disabled="disabled"
        :type="item.type"
        @click="updateValue(item)"
      ></component>
    </div>
  </div>
</template>


<script>
import { getPaginationModel, ITEM_TYPES } from 'ultimate-pagination';

export default {
  name: 'ultimate-pagination',
  model: {
    prop: 'currentPage',
    event: 'change'
  },
  props: ['currentPage', 'totalPages', 'itemTypeToComponent', 'disabled'],
  computed: {
    paginationModel() {
      return getPaginationModel({
        currentPage: this.currentPage,
        totalPages: this.totalPages
      });
    }
  },
  methods: {
    updateValue(item) {
      this.$emit('change', item.value);
    }
  }
}
</script>
