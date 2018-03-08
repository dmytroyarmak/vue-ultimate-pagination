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

      <div>
        <label for="is-disabled-checkbox">Disabled</label>
        <input
          id="is-disabled-checkbox"
          type="checkbox"
          v-model="isDisabled"
        />
      </div>
    </fieldset>

    <fieldset>
      <legend>Basic</legend>

      <ultimate-pagination
        v-model="currentPage"
        :total-pages="totalPages"
        :item-type-to-component="itemTypeToBasicComponent"
        :disabled="isDisabled"
      ></ultimate-pagination>
    </fieldset>

     <fieldset>
      <legend>Material</legend>

      <ultimate-pagination
        v-model="currentPage"
        :total-pages="totalPages"
        :item-type-to-component="itemTypeToMaterialComponent"
        :disabled="isDisabled"
      ></ultimate-pagination>
    </fieldset>
  </div>
</template>

<script>
import UltimatePagination from './UltimatePagination.vue';
import { itemTypeToBasicComponent } from './themes/basic';
import { itemTypeToMaterialComponent } from './themes/material';


export default {
  name: 'app',
  components: {
    UltimatePagination
  },
  data () {
    return {
      currentPage: 1,
      totalPages: 10,
      isDisabled: false,
      itemTypeToBasicComponent,
      itemTypeToMaterialComponent
    }
  }
}
</script>
