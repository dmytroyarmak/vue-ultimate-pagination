<template>
  <div>
    <h1>vue-ultimate-pagination</h1>

    <fieldset>
      <legend>Configuration</legend>
      <div>
        <label for="current-page-input">Current page</label>
        <input
          id="current-page-input"
          type="number"
          min="1"
          step="1"
          v-model.number="currentPage"
        />
      </div>

      <div>
        <label for="total-pages-input">Total pages</label>
        <input
          id="total-pages-input"
          type="number"
          min="1"
          step="1"
          v-model.number="totalPages"
        />
      </div>
    </fieldset>

    <fieldset>
      <legend>Component</legend>

      <ultimate-pagination
        v-model="currentPage"
        :total-pages="totalPages"
      ></ultimate-pagination>
    </fieldset>
  </div>
</template>

<script>
import UltimatePagination from './UltimatePagination.vue';

export default {
  name: 'app',
  components: {
    UltimatePagination
  },
  data () {
    return {
      currentPage: 1,
      totalPages: 10
    }
  }
}
</script>
