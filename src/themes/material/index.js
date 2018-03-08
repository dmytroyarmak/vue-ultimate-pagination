import { ITEM_TYPES } from 'ultimate-pagination';

import Page from './Page.vue';
import Ellipsis from './Ellipsis.vue';
import FirstPageLink from './FirstPageLink.vue';
import PreviousPageLink from './PreviousPageLink.vue';
import NextPageLink from './NextPageLink.vue';
import LastPageLink from './LastPageLink.vue';

export const itemTypeToMaterialComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};
