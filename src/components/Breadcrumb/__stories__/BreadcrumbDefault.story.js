import { text } from '@storybook/addon-knobs'
import Breadcrumb from '../index'

export default () => ({
  components: { Breadcrumb },
  props: {
    crumb: {
      default: text('crumb', 'Breadcrumb'),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumb :crumb="crumb" />
    </div>
  `,
})
