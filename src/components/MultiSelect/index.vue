<template>
  <div :class="classes" @click="handleRootClick">
    <FormGroup
      :error="error"
      :helperText="helperText"
      :label="label"
      space="xsmall"
    >
      <ClickOutsideDetector :onClickOutside="handleClickOutside">
        <div class="multi-select__content-wrapper">
          <div class="multi-select__input-wrapper">
            <TextInput
              class="multi-select__input"
              :iconName="
                searchQueryState.length && isOpenState ? 'close' : undefined
              "
              iconSide="right"
              :onIconClick="handleClearSearchClick"
              :onValueChange="handleInputValueChange"
              :placeholder="placeholder"
              :value="searchQueryState"
            />
            <Box
              v-if="!isOpenState"
              class="multi-select__tags"
              padding="xsmall"
            >
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
          <Box
            v-if="isOpenState"
            class="multi-select__popup"
            marginTop="xsmall"
          >
            <Stack showDividers>
              <Box
                v-if="!searchQueryState"
                paddingX="medium"
                paddingY="small"
                @click.native.stop="handleSelectAllClick"
              >
                <Checkbox
                  :isChecked="areAllItemsSelected"
                  :text="`Select All (${items.length})`"
                />
              </Box>
              <Box
                class="multi-select__items"
                component="ul"
                paddingX="medium"
                paddingY="small"
              >
                <Stack space="medium">
                  <Box
                    v-for="item in filteredItems"
                    :key="getId(item)"
                    component="li"
                    @click.native.stop="handleItemClick(item)"
                  >
                    <Checkbox
                      :isChecked="getIsSelected(item)"
                      :text="getText(item)"
                    />
                  </Box>
                  <Box v-if="!filteredItems.length" component="li">
                    <Typography color="subtle">
                      No results matching "{{ searchQueryState }}"
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </div>
      </ClickOutsideDetector>
    </FormGroup>
  </div>
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
    disabled: {
      default: false,
      type: Boolean,
    },
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
      validator: getIsMaxTagCountValid,
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
          'multi-select--open': this.isOpenState,
          'multi-select--disabled': this.disabled,
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
      if (this.disabled) return

      this.isOpenState = true
    },

    handleSelectAllClick() {
      const allIds = map(this.items, (item) => this.getId(item))

      this.onSelectedIdsChange(this.areAllItemsSelected ? [] : allIds)
    },

    handleTagDelete(id, e) {
      e.stopPropagation()

      this.onSelectedIdsChange(without(this.selectedIds, id))
    },
  },
}

function getIsMaxTagCountValid(value) {
  const isValid = value >= 1

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'MultiSelect: The "maxTagCount" prop must be greater than or equal to one.',
    )
  }

  return isValid
}
</script>

<style scoped>
.multi-select--disabled {
  @apply opacity-50 cursor-not-allowed select-none;
}
.multi-select:not(.multi-select--open):not(.multi-select--disabled) {
  @apply cursor-pointer;
}
.multi-select__content-wrapper {
  @apply relative;
}
.multi-select__input-wrapper {
  @apply relative;
}
.multi-select:not(.multi-select--open) .multi-select__input {
  @apply pointer-events-none;
}
.multi-select__tags {
  @apply absolute left-0 top-0;
}
.multi-select__popup {
  @apply absolute bg-white shadow-md rounded w-full z-50;
}
.multi-select__items {
  @apply overflow-y-auto;
  max-height: 14.75rem;
}
</style>
