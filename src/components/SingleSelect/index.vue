<template>
  <div :class="classes" @click="handleRootClick">
    <FormGroup
      :error="error"
      :helperText="helperText"
      :label="label"
      space="xsmall"
    >
      <ClickOutsideDetector :onClickOutside="handleClickOutside">
        <div class="single-select__content-wrapper">
          <div class="single-select__input-wrapper">
            <TextInput
              class="single-select__input"
              :iconName="inputIconName"
              iconSide="right"
              :onIconClick="handleInputIconClick"
              :onValueChange="handleInputValueChange"
              :placeholder="placeholder"
              :value="inputValue"
            />
          </div>
          <Box
            v-if="isOpenState"
            class="single-select__popup"
            marginTop="xsmall"
          >
            <Stack class="single-select__items" showDividers>
              <template v-if="filteredItems.length">
                <ListItem
                  v-for="item in filteredItems"
                  :key="getId(item)"
                  :isSelected="getIsSelected(item)"
                  :primaryText="getPrimaryText(item) || getText(item)"
                  :secondaryText="getSecondaryText(item)"
                  :tertiaryText="getTertiaryText(item)"
                  @click.native.stop="handleItemClick(item)"
                />
              </template>
              <Box v-else paddingX="gutter" paddingY="medium">
                <Typography color="subtle">
                  No results matching "{{ searchQueryState }}"
                </Typography>
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
import filter from 'lodash/filter'
import find from 'lodash/find'
import includes from 'lodash/includes'
import map from 'lodash/map'

import ClickOutsideDetector from '../__internal/ClickOutsideDetector/index'
import Box from '../Box/index'
import FormGroup from '../FormGroup/index'
import ListItem from '../ListItem/index'
import Stack from '../Stack/index'
import TextInput from '../TextInput/index'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    ClickOutsideDetector,
    FormGroup,
    ListItem,
    Stack,
    TextInput,
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
    getPrimaryText: {
      default: (item) => item,
      type: Function,
    },
    getSecondaryText: {
      default: () => {},
      type: Function,
    },
    getTertiaryText: {
      default: () => {},
      type: Function,
    },
    getText: {
      default: () => {},
      type: Function,
    },
    helperText: {
      default: '',
      type: String,
    },
    isFilteringEnabled: {
      default: true,
      type: Boolean,
    },
    items: {
      default: () => [],
      type: Array,
    },
    label: {
      default: '',
      type: String,
    },
    onSelectedIdChange: {
      default: () => {},
      type: Function,
    },
    placeholder: {
      default: 'Search...',
      type: String,
    },
    selectedId: {
      default: undefined,
      type: [Number, String],
    },
  },
  data: () => ({
    isOpenState: false,
    searchQueryState: '',
  }),
  computed: {
    classes() {
      return [
        'single-select',
        {
          'single-select--open': this.isOpenState,
          'single-select--disabled': this.disabled,
        },
      ]
    },

    filteredItems() {
      if (!this.searchQueryState || !this.isFilteringEnabled) {
        return this.items
      }

      const indexObjects = map(this.items, (item) => ({
        id: this.getId(item),
        primaryText: this.getPrimaryText(item) || this.getText(item),
        secondaryText: this.getSecondaryText(item),
        tertiaryText: this.getTertiaryText(item),
      }))

      const searchResultIds = map(
        fuzzysort.go(this.searchQueryState, indexObjects, {
          keys: ['primaryText', 'secondaryText', 'tertiaryText'],
        }),
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

    inputValue() {
      if (!this.isOpenState) {
        const selectedItem = find(this.items, this.getIsSelected)

        if (!selectedItem) return ''

        return this.getPrimaryText(selectedItem) || this.getText(selectedItem)
      }

      return this.searchQueryState
    },
  },
  methods: {
    getIsSelected(item) {
      return this.selectedId === this.getId(item)
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
      if (!this.getIsSelected(item)) {
        this.onSelectedIdChange(this.getId(item))
      }

      this.isOpenState = false
      this.searchQueryState = ''
    },

    handleRootClick() {
      if (this.disabled) return

      this.isOpenState = true
    },
  },
}
</script>

<style scoped>
.single-select--disabled {
  @apply opacity-50 cursor-not-allowed select-none;
}
.single-select:not(.single-select--open):not(.single-select--disabled) {
  @apply cursor-pointer;
}
.single-select__content-wrapper {
  @apply relative;
}
.single-select__input-wrapper {
  @apply relative;
}
.single-select:not(.single-select--open) .single-select__input {
  @apply pointer-events-none;
}
.single-select__popup {
  @apply absolute bg-white border border-border shadow rounded w-full z-50;
}
.single-select__items {
  @apply overflow-y-auto;
  max-height: 14.75rem;
}
</style>
