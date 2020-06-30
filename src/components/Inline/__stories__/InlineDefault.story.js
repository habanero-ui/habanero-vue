import { select, text } from '@storybook/addon-knobs'
import Box from '../../Box/index'
import Inline from '../index'

export default () => ({
  components: { Box, Inline },
  props: {
    align: {
      default: select('align', ['left', 'center', 'right'], 'left'),
    },
    alignY: {
      default: select(
        'alignY',
        ['bottom', 'center', 'stretch', 'top'],
        'stretch',
      ),
    },
    space: {
      default: text('space', 'gutter'),
    },
  },
  template: `
    <div class="p-6">
      <Box backgroundColor="gold" class="max-w-md">
        <Inline :align="align" :alignY="alignY" :space="space">
          <div
            v-for="n in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
            class="bg-black w-10"
            :class="n % 2 === 0 ? 'h-10' : 'h-8'"
            :key="n"
          />
        </Inline>
      </Box>
    </div>
  `,
})
