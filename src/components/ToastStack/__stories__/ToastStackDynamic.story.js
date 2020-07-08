import uniqueId from 'lodash/uniqueId'
import Box from '../../Box/index'
import Button from '../../Button/index'
import ToastStack from '../index'

export default () => ({
  components: { Box, Button, ToastStack },
  data: () => ({
    toasts: [],
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
          :onToastsChange="handleToastsChange"
          :toasts="toasts"
        />
      </Box>
    </Box>
  `,
  methods: {
    handleAddToastClick() {
      const id = uniqueId()
      this.toasts = [
        ...this.toasts,
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
      this.toasts = toasts
    },
  },
})
