import { action } from '@storybook/addon-actions'
import CalendarIcon from '../../../icons/CalendarIcon'
import Button from '../index'

export default () => ({
  components: { Button, CalendarIcon },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="error" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="error" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="info" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="info" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="success" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="success" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="warning" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="warning" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
