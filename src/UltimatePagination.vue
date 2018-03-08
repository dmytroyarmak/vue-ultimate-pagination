<template>
  <div>
    <button
      v-for="item in paginationModel"
      :key="item.key"
      :style="getButtonStyles(item)"
      @click="updateValue(item)"
    >{{ getButtonLabel(item) }}</button>
  </div>
</template>


<script>
import { getPaginationModel, ITEM_TYPES } from 'ultimate-pagination';

export default {
  name: 'ultimate-pagination',
  props: ['value', 'totalPages'],
  computed: {
    paginationModel() {
      return getPaginationModel({
        currentPage: this.value,
        totalPages: this.totalPages
      });
    }
  },
  methods: {
    getButtonLabel(item) {
      switch (item.type) {
        case ITEM_TYPES.ELLIPSIS: return '...';
        case ITEM_TYPES.FIRST_PAGE_LINK: return '<<';
        case ITEM_TYPES.LAST_PAGE_LINK: return '>>';
        case ITEM_TYPES.PREVIOUS_PAGE_LINK: return '<';
        case ITEM_TYPES.NEXT_PAGE_LINK: return '>';
        default: return item.value;
      }
    },
    getButtonStyles(item) {
      if (item.type === ITEM_TYPES.PAGE && item.isActive) {
        return { fontWeight: 'bold' };
      }
    },
    updateValue(item) {
      this.$emit('input', item.value);
    }
  }
}
</script>
