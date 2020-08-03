import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Tab from '../index'

export default () => ({
  components: { Tab },
  props: {
    badgeColor: {
      default: text('badgeColor', 'error'),
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
    <div class="flex flex-start p-6"> 
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
    </div>
  `,
  methods: {
    onSelect: action('onSelect'),
  },
})
