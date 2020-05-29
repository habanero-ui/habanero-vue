import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    text: {
      default: text('Text', 'Button Text'),
    },
  },
  template: `
    <div class="p-6">
      <div class="flex pb-6">
        <Button class="mr-6" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="error" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="error" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="info" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="info" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="success" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="success" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="warning" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="warning" size="small" :text="text" @click.native="action" />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
