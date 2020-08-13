import spacingAliases from '../../../constants/spacingAliases'
import Box, { getRemFromSpacing } from '../index'

export default ((args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  data: () => ({
    spacingAliases,
  }),
  template: `
    <div>
      <div v-for="(spacingAlias, index) in spacingAliases" :key="spacingAlias">
        <Box class="border" :padding="spacingAlias">
          {{ spacingAlias }} - {{ getRemFromSpacing(spacingAlias) }}
        </Box>
      </div>
    </div>
  `,
  methods: {
    getRemFromSpacing,
  },
})).bind({})
