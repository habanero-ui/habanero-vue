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
              :iconName="inputIconName"
              iconSide="right"
              :onIconClick="handleInputIconClick"
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
                            {{ remainingTag.tooltip }}
                          </Typography>
                        </Stack>
                      </Box>
                    </template>
                  </Tooltip>
                  <Tooltip
                    v-else-if="tag.showtooltip"
                    :key="tag.id"
                    :text="tag.tooltip"
                    class="cursor-default"
                  >
                    <Tag
                      :key="tag.id"
                      :onDelete="handleTagDelete"
                      :text="tag.text"
                      :value="tag.id"
                    />
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
import reduce from 'lodash/reduce'
import sortBy from 'lodash/sortBy'
import take from 'lodash/take'
import takeRight from 'lodash/takeRight'
import without from 'lodash/without'
import xor from 'lodash/xor'

import ClickOutsideDetector from '../__internal/ClickOutsideDetector/index'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Checkbox from '../Checkbox/index'
import FormGroup from '../FormGroup/index'
import Inline from '../Inline/index'
import Stack from '../Stack/index'
import Tag from '../Tag/index'
import TextInput from '../TextInput/index'
import Tooltip from '../Tooltip/index'
import Typography from '../Typography/index'

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
  mixins: [
    PropValidation({
      maxTagCount: validateMaxTagCount,
    }),
  ],
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
    maxCharLength: 42,
    searchQueryState: '',
    shortenedLength: 10,
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
          'multi-select--disabled': this.disabled,
          'multi-select--open': this.isOpenState,
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

    inputIconName() {
      if (!this.isOpenState) {
        return 'chevron-down'
      }

      return this.searchQueryState.length ? 'close' : 'chevron-up'
    },

    tags() {
      const sortedSelectedItems = sortBy(
        filter(this.items, this.getIsSelected),
        this.getText,
      )
      const tagCharCount = reduce(
        sortedSelectedItems,
        (sum, value) => sum + this.getText(value).length,
        0,
      )

      const shortenTags = tagCharCount > this.maxCharLength

      const allTags = map(sortedSelectedItems, (selectedItem) => ({
        id: this.getId(selectedItem),
        text: shortenTags
          ? this.getText(selectedItem).substring(0, this.shortenedLength)
              .length < this.shortenedLength
            ? this.getText(selectedItem)
            : this.getText(selectedItem).substring(0, this.shortenedLength) +
              '...'
          : this.getText(selectedItem),
        tooltip: this.getText(selectedItem),
        showtooltip:
          shortenTags &&
          this.getText(selectedItem).substring(0, this.shortenedLength)
            .length >= this.shortenedLength,
      }))

      if (allTags.length <= this.maxTagCount) {
        return allTags
      }

      const remainingTagCount = allTags.length - (this.maxTagCount - 1)
      const moreTag = {
        id: 'HABANERO_MORE_TAG',
        remainingTags: takeRight(allTags, remainingTagCount),
        text: `${remainingTagCount} more...`,
      }

      return [...take(allTags, this.maxTagCount - 1), moreTag]
    },
  },
  methods: {
    getIsSelected(item) {
      return includes(this.selectedIds, this.getId(item))
    },

    handleClickOutside() {
      this.isOpenState = false
      this.searchQueryState = ''
    },

    handleInputIconClick(e) {
      if (this.searchQueryState) {
        this.searchQueryState = ''
        return
      }

      e.stopPropagation()

      this.isOpenState = !this.isOpenState
    },

    handleInputValueChange(searchQueryState) {
      this.searchQueryState = searchQueryState
    },

    handleItemClick(item) {
      this.onSelectedIdsChange(xor(this.selectedIds, [this.getId(item)]))
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

      if (this.disabled) return

      this.onSelectedIdsChange(without(this.selectedIds, id))
    },
  },
}

function validateMaxTagCount(value) {
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
  @apply absolute bg-white border border-border shadow rounded w-full z-50;
}
.multi-select__items {
  @apply overflow-y-auto;
  max-height: 14.75rem;
}
</style>
