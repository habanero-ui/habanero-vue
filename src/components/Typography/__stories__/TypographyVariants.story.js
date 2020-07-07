import variants from '../../../constants/textVariants'
import Typography from '../index'

export default () => ({
  components: { Typography },
  data: () => ({
    variants,
  }),
  template: `
    <div class="p-6">
      <div v-for="(variant, index) in variants" class="mb-4" :key="variant">
        <Typography :variant="variant">
          <span class="capitalize">{{ variant.replace(/-/gi, ' ') }}</span> / Inter
        </Typography>
        <hr class="mt-1" />
      </div>
    </div>
  `,
})
