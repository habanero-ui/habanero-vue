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
        <Button class="mr-6" appearance="primary" color="error" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" color="error" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" color="error" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="info" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" color="info" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" color="info" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="success" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" color="success" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" color="success" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="secondary" color="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-4 -mr-2" /></Button>
        <Button class="mr-6" appearance="text" color="warning" :text="text" @click.native="action"><Icon name="bell" class="ml-3 -mr-1" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
