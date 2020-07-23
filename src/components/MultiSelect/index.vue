<template>
  <ClickOutsideDetector :onClickOutside="handleClickOutside">
    <div :class="classes" @click="handleRootClick">
      <FormGroup
        :error="error"
        :helperText="helperText"
        :label="label"
        space="xsmall"
      >
        <div class="multi-select-search">
          <TextInput
            class="multi-select__input"
            :iconName="
              searchQueryState.length && isOpenState ? 'close' : undefined
            "
            :onIconClick="handleClearSearchClick"
            :onValueChange="handleInputValueChange"
            :placeholder="placeholder"
            :value="searchQueryState"
          />
          <Inline space="xxsmall">
            <Tag v-if="sortedSelectedItems.length > 3">
              {{ sortedSelectedItems.length }} selected
            </Tag>
            <template v-else>
              <Tag
                v-for="item in sortedSelectedItems"
                :key="getId(item)"
                :onDelete="handleTagDelete"
                :value="item"
                :text="getText(item)"
              />
            </template>
          </Inline>
        </div>
        <div class="multi-select-dropdown is-relative">
          <div
            v-if="!searchQueryState"
            class="multi-select-all"
            @click="handleSelectAllClick"
          >
            <Checkbox
              :isChecked="areAllItemsSelected"
              :text="`Select All (${items.length})`"
            />
          </div>
          <ul class="multi-select-results">
            <li
              v-for="item in filteredItems"
              :key="getId(item)"
              class="multi-select-result"
              @click.stop="handleItemClick(item)"
            >
              <div class="py-3">
                <Checkbox
                  :isChecked="getIsSelected(item)"
                  :text="getText(item)"
                />
              </div>
            </li>
            <li
              v-if="!filteredItems.length"
              class="multi-select-result text-grey-400"
            >
              No results matching "{{ searchQueryState }}"
            </li>
          </ul>
        </div>
      </FormGroup>
    </div>
  </ClickOutsideDetector>
</template>

<script>
import fuzzysort from 'fuzzysort'
import filter from 'lodash/filter'
import includes from 'lodash/includes'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import without from 'lodash/without'

import toggleInArray from '../../helpers/toggleInArray'
import Checkbox from '../Checkbox/index'
import FormGroup from '../FormGroup/index'
import Inline from '../Inline/index'
import Tag from '../Tag/index'
import TextInput from '../TextInput/index'
import ClickOutsideDetector from './ClickOutsideDetector'

export default {
  components: {
    Checkbox,
    ClickOutsideDetector,
    FormGroup,
    Inline,
    Tag,
    TextInput,
  },
  props: {
    error: {
      default: '',
      type: String,
    },
    getId: {
      default: (item) => item,
      type: Function,
    },
    getText: {
      default: (item) => item,
      type: Function,
    },
    helperText: {
      default: '',
      type: String,
    },
    items: {
      default: () => [],
      type: Array,
    },
    label: {
      default: '',
      type: String,
    },
    onSelectedIdsChange: {
      default: () => {},
      type: Function,
    },
    placeholder: {
      default: 'Search...',
      type: String,
    },
    selectedIds: {
      default: () => [],
      type: Array,
    },
  },
  data: () => ({
    isOpenState: false,
    searchQueryState: '',
  }),
  computed: {
    areAllItemsSelected() {
      const allIds = map(this.items, (item) => this.getId(item))

      return isEqual(allIds, this.selectedIds)
    },

    classes() {
      return [
        'multi-select',
        {
          'multi-select__is-active': this.isOpenState,
          'multi-select__is-filtering': !this.isOpenState,
        },
      ]
    },

    filteredItems() {
      if (!this.searchQueryState) {
        return this.items
      }

      const indexObjects = map(this.items, (item) => ({
        id: this.getId(item),
        text: this.getText(item),
      }))

      const searchResultIds = map(
        fuzzysort.go(this.searchQueryState, indexObjects, { key: 'text' }),
        (result) => result.obj.id,
      )

      return filter(this.items, (item) =>
        includes(searchResultIds, this.getId(item)),
      )
    },

    sortedSelectedItems() {
      return sortBy(filter(this.items, this.getIsSelected), this.getText)
    },
  },
  methods: {
    getIsSelected(item) {
      return includes(this.selectedIds, this.getId(item))
    },

    handleClearSearchClick() {
      this.searchQueryState = ''
    },

    handleClickOutside() {
      this.isOpenState = false
      this.searchQueryState = ''
    },

    handleInputValueChange(searchQueryState) {
      this.searchQueryState = searchQueryState
    },

    handleItemClick(item) {
      this.onSelectedIdsChange(
        toggleInArray(this.getId(item), this.selectedIds),
      )
    },

    handleRootClick() {
      this.isOpenState = true
    },

    handleSelectAllClick() {
      const allIds = map(this.items, (item) => this.getId(item))

      this.onSelectedIdsChange(this.areAllItemsSelected ? [] : allIds)
    },

    handleTagDelete(item) {
      this.onSelectedIdsChange(without(this.selectedIds, this.getId(item)))
    },
  },
}
</script>

<style scoped>
/* .multi-select {
  @apply relative;
}

.multi-select-search {
  @apply relative border border-black rounded-md bg-white;
}

.multi-select-counter {
  @apply mr-2;
}

.multi-select-all {
  @apply flex items-center px-4 h-10 w-full border-b border-black bg-transparent;
}

.multi-select-all > label {
  @apply flex-grow;
}

.multi-select-dropdown {
  @apply absolute z-20 hidden overflow-hidden w-full border border-t-0 border-black rounded-b-md bg-white;
  top: 100%;
}

.multi-select-dropdown.is-relative {
  @apply relative;
}

.multi-select-results {
  @apply overflow-y-scroll;
}

.multi-select-results ul {
  @apply pl-0;
  list-style: none;
}

.multi-select-results ul .multi-select-result {
  @apply pl-8;
}

.multi-select-results ul ul .multi-select-result {
  @apply pl-12;
}

.multi-select-result-heading {
  @apply text-xl;
}

.multi-select-result {
  @apply flex flex-col justify-center px-4 h-10;
}

.multi-select-all:hover,
.multi-select-result:hover {
  @apply bg-offwhite cursor-pointer;
}

.multi-select.multi-select__is-active .multi-select-search {
  @apply rounded-b-none;
}
.multi-select.multi-select__is-active .multi-select-icon {
  transform: rotate(180deg);
}
.multi-select.multi-select__is-active .multi-select-dropdown {
  @apply block;
}

.multi-select.multi-select__is-filtering .multi-select__input {
  @apply hidden;
}

.multi-select.multi-select__is-filtering .multi-select-tags {
  @apply flex;
}

.multi-select-dropdown.is-relative {
  @apply relative;
} */
</style>
