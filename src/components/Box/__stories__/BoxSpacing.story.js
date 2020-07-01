import spacingAliases from '../../../constants/spacingAliases'
import Box, { getRemFromSpacing } from '../index'

export default () => ({
  components: { Box },
  data: () => ({
    spacingAliases,
  }),
  template: `
    <div class="p-6">
      <div v-for="(alias, index) in spacingAliases" :key="alias">
        <Box
          class="border"
          :padding="alias"
          :marginBottom="alias"
          >
          {{ alias }} - {{ getSpacingRemValue(alias) }}
        </Box>
      </div>
    </div>
  `,
  methods: {
    getSpacingRemValue(alias) {
      return getRemFromSpacing(alias)
    },
  },
})
