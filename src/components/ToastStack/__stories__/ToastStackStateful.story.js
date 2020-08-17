import uniqueId from 'lodash/uniqueId'

import Box from '../../Box/index'
import Button from '../../Button/index'
import ToastStack from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box, Button, ToastStack },
  props: Object.keys(argTypes),
  data: () => ({
    toastsState: [],
  }),
  template: `
    <Box class="absolute inset-0 flex flex-col items-start" padding="gutter">
      <div class="mt-auto">
        <Button
          text="Add Toast"
          @click.native="handleAddToastClick"
        />
      </div>
      <Box class="fixed right-0 top-0" padding="gutter">
        <ToastStack
          v-bind="$props"
          :onToastsChange="handleToastsChange"
          :toasts="toastsState"
        />
      </Box>
    </Box>
  `,
  methods: {
    handleAddToastClick() {
      const id = uniqueId()
      this.toastsState = [
        ...this.toastsState,
        {
          id,
          label: 'Toast Label',
          message:
            id % 2 === 0
              ? 'Message for the toast'
              : 'Longer message for the toast!!!',
        },
      ]
    },

    handleToastsChange(toasts) {
      this.toastsState = toasts
    },
  },
})

const ToastStackStateful = Template.bind({})

ToastStackStateful.argTypes = {
  onToastsChange: { table: { disable: true } },
  toasts: { table: { disable: true } },
}

export default ToastStackStateful
