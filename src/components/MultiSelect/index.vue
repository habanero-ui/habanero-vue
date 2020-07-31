<template>
  <ClickOutsideDetector :onClickOutside="handleClickOutside">
    <div :class="classes" @click="handleRootClick">
      <FormGroup
        :error="error"
        :helperText="helperText"
        :label="label"
        space="xsmall"
      >
        <div class="multi-select__input-wrapper">
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
          <Box v-if="true" class="multi-select__tags" padding="xsmall">
            <Inline space="xsmall">
              <template v-for="tag in tags">
                <Tooltip
                  v-if="tag.id === 'HABANERO_MORE_TAG'"
                  :key="tag.id"
                  class="cursor-default"
                >
                  <Tag :key="tag.id" :text="tag.text" :value="tag.id" />
                  <template slot="content">
                    <Box padding="small">
                      <Stack space="xsmall">
                        <Typography
                          v-for="remainingTag in tag.remainingTags"
                          :key="remainingTag.id"
                          variant="label-small"
                        >
                          {{ remainingTag.text }}
                        </Typography>
                      </Stack>
                    </Box>
                  </template>
                </Tooltip>
                <Tag
                  v-else
                  :key="tag.id"
                  :onDelete="handleTagDelete"
                  :text="tag.text"
                  :value="tag.id"
                />
              </template>
            </Inline>
          </Box>
        </div>
        <div class="multi-select__popup is-relative">
          <div v-if="!searchQueryState" @click="handleSelectAllClick">
            <Checkbox
              :isChecked="areAllItemsSelected"
              :text="`Select All (${items.length})`"
            />
          </div>
          <ul>
            <Box
              v-for="item in filteredItems"
              :key="getId(item)"
              component="li"
              @click.native.stop="handleItemClick(item)"
            >
              <div class="py-3">
                <Checkbox
                  :isChecked="getIsSelected(item)"
                  :text="getText(item)"
                />
              </div>
            </Box>
            <Box
              v-if="!filteredItems.length"
              class="multi-select-result text-grey-400"
              component="li"
            >
              No results matching "{{ searchQueryState }}"
            </Box>
          </ul>
        </div>
      </FormGroup>
    </div>
  </ClickOutsideDetector>
</template>

<script>
import fuzzysort from 'fuzzysort'
import every from 'lodash/every'
import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import take from 'lodash/take'
import takeRight from 'lodash/takeRight'
import without from 'lodash/without'

import toggleInArray from '../../helpers/toggleInArray'
import Box from '../Box/index'
import Checkbox from '../Checkbox/index'
import FormGroup from '../FormGroup/index'
import Inline from '../Inline/index'
import Stack from '../Stack/index'
import Tag from '../Tag/index'
import TextInput from '../TextInput/index'
import Tooltip from '../Tooltip/index'
import Typography from '../Typography/index'
import ClickOutsideDetector from './ClickOutsideDetector'

export default {
  components: {
    Box,
    Checkbox,
    ClickOutsideDetector,
    FormGroup,
    Inline,
    Stack,
    Tag,
    TextInput,
    Tooltip,
    Typography,
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
    maxTagCount: {
      default: 4,
      type: Number,
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
      return every(this.items, (item) =>
        includes(this.selectedIds, this.getId(item)),
      )
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

    tags() {
      const sortedSelectedItems = sortBy(
        filter(this.items, this.getIsSelected),
        this.getText,
      )
      const allTags = map(sortedSelectedItems, (selectedItem) => ({
        id: this.getId(selectedItem),
        text: this.getText(selectedItem),
      }))

      if (allTags.length <= this.maxTagCount) {
        return allTags
      }

      const remainingTagCount = allTags.length - (this.maxTagCount - 1)
      const moreTag = {
        id: 'HABANERO_MORE_TAG',
        text: `${remainingTagCount} more...`,
        remainingTags: takeRight(allTags, remainingTagCount),
      }

      return [...take(allTags, this.maxTagCount - 1), moreTag]
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

    handleTagDelete(id) {
      this.onSelectedIdsChange(without(this.selectedIds, id))
    },
  },
}
</script>

<style scoped>
.multi-select__input-wrapper {
  @apply relative;
}
.multi-select__tags {
  @apply absolute left-0 top-0;
}
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
