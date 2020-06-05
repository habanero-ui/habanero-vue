import { action } from '@storybook/addon-actions'
import Button from '../index'
import Icon from '../../Icon'

export default () => ({
  components: { Button, Icon },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" size="small" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="error" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="error" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="error" size="small" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="info" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="info" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="info" size="small" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="success" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="success" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="success" size="small" @click.native="action"><Icon name="bell" /></Button>
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="warning" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="secondary" color="warning" size="small" @click.native="action"><Icon name="bell" /></Button>
        <Button class="mr-6" appearance="text" color="warning" size="small" @click.native="action"><Icon name="bell" /></Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
