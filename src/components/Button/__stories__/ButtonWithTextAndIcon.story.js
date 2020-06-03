import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Button from '../index'
import Icon from '../../Icon'

export default () => ({
  components: { Button, Icon },
  props: {
    text: {
      default: text('Text', 'Button Text'),
    },
  },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" intent="error" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" intent="error" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" intent="info" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" intent="info" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" intent="success" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" intent="success" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" intent="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" intent="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
