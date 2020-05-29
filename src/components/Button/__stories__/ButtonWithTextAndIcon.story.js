import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import CalendarIcon from '../../../icons/CalendarIcon'
import Button from '../index'

export default () => ({
  components: { Button, CalendarIcon },
  props: {
    text: {
      default: text('Text', 'Button Text'),
    },
  },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="secondary" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="text" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="secondary" intent="error" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="text" intent="error" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="secondary" intent="info" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="text" intent="info" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="secondary" intent="success" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="text" intent="success" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="secondary" intent="warning" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
        <Button class="mr-6" appearance="text" intent="warning" :text="text" @click.native="action"><CalendarIcon class="ml-5 h-5 w-5 -mr-6" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
