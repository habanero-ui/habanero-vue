import { action } from '@storybook/addon-actions'
import Slideover from '../index'

export default () => ({
  components: { Slideover },
  template: `
    <Slideover @openInNewWindow="action" isOpen="true">
      <div>This is a test, let's see if it works!</div>
    </Slideover>
  `,
  methods: {
    action: action('Open in new window'),
  },
})
