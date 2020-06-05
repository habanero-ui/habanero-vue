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
        <Button class="mr-6" appearance="primary" color="error" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="error" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="error" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="info" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="info" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="info" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="success" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="success" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="success" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="warning" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="warning" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="warning" @click.native="action"><Icon name="bell" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
