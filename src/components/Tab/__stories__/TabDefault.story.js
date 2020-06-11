import { boolean, text } from '@storybook/addon-knobs'
import Tab from '../index'

export default () => ({
  components: { Tab },
  props: {
    disabled: {
      default: boolean('disabled', false),
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
        :disabled="disabled"
        :isSelected="isSelected"
        :name="text"
        :text="text"
      />
    </div>
  `,
})
