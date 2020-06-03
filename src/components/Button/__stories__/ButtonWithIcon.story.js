import { action } from '@storybook/addon-actions'
import Button from '../index'
import Icon from '../../Icon'

export default () => ({
  components: { Button, Icon },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" intent="error" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" intent="error" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" intent="info" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" intent="info" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" intent="success" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" intent="success" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" intent="warning" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" intent="warning" @click.native="action"><Icon name="bell" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
