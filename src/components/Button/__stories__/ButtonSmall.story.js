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
        <Button class="mr-6" appearance="primary" color="error" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" color="error" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" color="error" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="info" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" color="info" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" color="info" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="success" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" color="success" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" color="success" size="small" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button class="mr-6" appearance="primary" color="warning" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="secondary" color="warning" size="small" :text="text" @click.native="action" />
        <Button class="mr-6" appearance="text" color="warning" size="small" :text="text" @click.native="action" />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
