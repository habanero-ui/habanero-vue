<template>
  <TextInput
    v-bind="TextInputProps"
    inputMode="numeric"
    :onValueChange="() => {}"
    :value="formattedValue"
    @keydown.native="handleKeyDown"
  />
</template>

<script>
import isNil from 'lodash/isNil'
import pick from 'lodash/pick'

import PropValidation from '../../mixins/PropValidation'
import TextInput from '../TextInput/index'

export default {
  components: { TextInput },
  mixins: [
    PropValidation({
      cents: validateCents,
    }),
  ],
  props: {
    cents: {
      default: 0,
      type: Number,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    error: {
      default: '',
      type: String,
    },
    helperText: {
      default: '',
      type: String,
    },
    iconName: {
      default: undefined,
      type: String,
    },
    iconSide: {
      default: 'left',
      type: String,
    },
    iconSize: {
      default: 'medium',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    max: {
      default: Number.MAX_SAFE_INTEGER,
      type: Number,
    },
    onCentsChange: {
      default: () => {},
      type: Function,
    },
    onIconClick: {
      default: undefined,
      type: Function,
    },
  },
  computed: {
    formattedValue() {
      const dollars = (this.cents || 0) / 100

      return dollars.toLocaleString('en-US', {
        currency: 'USD',
        style: 'currency',
      })
    },

    TextInputProps() {
      return {
        ...pick(this.$props, Object.keys(TextInput.props)),
        ...this.$attrs,
      }
    },
  },
  methods: {
    handleKeyDown({ code, key, keyCode }) {
      const VALID_FIRST_CHAR = /^[1-9]{1}$/
      const VALID_NEXT_CHAR = /^[0-9]{1}$/
      const DELETE_KEY_CODE = 8
      const BACKSPACE_CODE = 'Backspace'

      const isDeleteKey = isNil(code)
        ? keyCode === DELETE_KEY_CODE
        : code === BACKSPACE_CODE

      if (
        (this.cents === 0 && !VALID_FIRST_CHAR.test(key)) ||
        (this.cents !== 0 && !VALID_NEXT_CHAR.test(key) && !isDeleteKey)
      ) {
        return
      }

      const nextCents = getNextCents({
        isDeleteKey,
        key,
        prevCents: this.cents,
      })

      if (nextCents > this.max) {
        return
      }

      this.onCentsChange(nextCents)
    },
  },
}

function getNextCents({ isDeleteKey, key, prevCents }) {
  const centsString = prevCents.toString()

  if (!isDeleteKey) {
    const nextCentsString = prevCents === 0 ? key : `${centsString}${key}`

    return Number.parseInt(nextCentsString, 10)
  }

  const nextCentsString = centsString.slice(0, -1)

  return nextCentsString === '' ? 0 : Number.parseInt(nextCentsString, 10)
}

function validateCents(cents) {
  if (isNil(cents)) {
    return
  }

  const centsAbsTrunc = Math.trunc(Math.abs(cents))

  if (
    cents !== centsAbsTrunc ||
    !Number.isFinite(cents) ||
    Number.isNaN(cents)
  ) {
    // eslint-disable-next-line no-console
    console.error(
      `MoneyInput: Bad value "${cents}". The cents prop must be a non-negative integer.`,
    )
  }
}
</script>
