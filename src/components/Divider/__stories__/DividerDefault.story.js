import { select } from '@storybook/addon-knobs'

import Divider from '../index'

export default () => ({
  components: { Divider },
  props: {
    thickness: {
      default: select('thickness', ['regular', 'thin'], 'regular'),
    },
  },
  template: `
    <div class="p-6">
      <Divider :thickness="thickness" />
    </div>
  `,
})
