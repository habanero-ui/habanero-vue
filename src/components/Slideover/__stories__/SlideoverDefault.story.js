import { action } from '@storybook/addon-actions'
import Slideover from '../index'

export default () => ({
  components: { Slideover },
  template: `
    <Slideover @openInNewWindow="action" isOpen="true" />
  `,
  methods: {
    action: action('Open in new window'),
  },
})
