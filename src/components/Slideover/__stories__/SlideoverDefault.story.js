import { action } from '@storybook/addon-actions'
import Slideover from '../index'

export default () => ({
  components: { Slideover },
  template: `
    <div class="absolute inset-0">
      <Slideover
        :isOpen="true"
        @isOpenChange="isOpenChange">
        Some Content for the Slideover
      </Slideover>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
  },
})
