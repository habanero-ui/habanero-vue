import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

import colors from '../../../constants/colors'
import Tab from '../index'

export default () => ({
  components: { Tab },
  props: {
    badgeColor: {
      default: select('badgeColor', colors, 'error'),
    },
    badgeText: {
      default: text('badgeText'),
    },
    disabled: {
      default: boolean('disabled', false),
    },
    isBadgeVisible: {
      default: boolean('isBadgeVisible', false),
    },
    isSelected: {
      default: boolean('isSelected', true),
    },
    name: {
      default: text('name', 'a'),
    },
    text: {
      default: text('text', 'Text'),
    },
  },
  template: `
    <Tab
      :badgeColor="badgeColor"
      :badgeText="badgeText"
      :disabled="disabled"
      :isBadgeVisible="isBadgeVisible"
      :isSelected="isSelected"
      :name="text"
      :onSelect="onSelect"
      :text="text"
    />
  `,
  methods: {
    onSelect: action('onSelect'),
  },
})
