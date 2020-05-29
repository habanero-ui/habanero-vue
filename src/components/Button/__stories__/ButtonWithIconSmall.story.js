import { action } from '@storybook/addon-actions'
import CalendarIcon from '../../../icons/CalendarIcon'
import Button from '../index'

export default () => ({
  components: { Button, CalendarIcon },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="error" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="error" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="info" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="info" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="success" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="success" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="secondary" intent="warning" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
        <Button class="mr-6" appearance="text" intent="warning" size="small" @click.native="action"><CalendarIcon class="h-5 w-5" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
