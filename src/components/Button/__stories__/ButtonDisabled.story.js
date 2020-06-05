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
        <Button disabled class="mr-6" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="secondary" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="text" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button disabled class="mr-6" appearance="primary" color="error" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="secondary" color="error" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="text" color="error" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button disabled class="mr-6" appearance="primary" color="info" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="secondary" color="info" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="text" color="info" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button disabled class="mr-6" appearance="primary" color="success" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="secondary" color="success" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="text" color="success" :text="text" @click.native="action" />
      </div>
      <div class="flex pb-6">
        <Button disabled class="mr-6" appearance="primary" color="warning" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="secondary" color="warning" :text="text" @click.native="action" />
        <Button disabled class="mr-6" appearance="text" color="warning" :text="text" @click.native="action" />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
