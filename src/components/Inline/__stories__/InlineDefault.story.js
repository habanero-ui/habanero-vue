import Box from '../../Box/index'
import Inline from '../index'

export default ((args, { argTypes }) => ({
  components: { Box, Inline },
  props: Object.keys(argTypes),
  template: `
    <div class="max-w-md">
      <Inline v-bind="$props">
        <Box
          v-for="n in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          backgroundColor="subtle"
          class="w-10"
          :class="n % 2 === 0 ? 'h-10' : 'h-8'"
          :key="n"
        />
      </Inline>
    </div>
  `,
})).bind({})
