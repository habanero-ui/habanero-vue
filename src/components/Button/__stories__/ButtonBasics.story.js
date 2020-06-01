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
        <Button class="mr-6" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="error" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="error" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="error" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="info" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="info" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="info" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="success" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="success" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="success" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" intent="warning" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" intent="warning" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" intent="warning" :text="text" @click.native="action" />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})