import spacingAliases from '../../../constants/spacingAliases'
import Box, { getRemFromSpacing } from '../index'

export default ((args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  data: () => ({
    spacingAliases,
  }),
  template: `
    <div v-for="(spacingAlias, index) in spacingAliases" :key="spacingAlias">
      <Box class="border" :padding="spacingAlias">
        {{ spacingAlias }} - {{ getRemFromSpacing(spacingAlias) }}
      </Box>
    </div>
  `,
  methods: {
    getRemFromSpacing,
  },
})).bind({})
