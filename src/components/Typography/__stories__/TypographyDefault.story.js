import { text } from '@storybook/addon-knobs'
import Typography from '../index'

export default () => ({
  components: { Typography },
  props: {
    text: {
      default: text('Text', 'Some Text'),
    },
  },
  template: `
    <div class="p-6">
      <Typography variant="h1">h1: {{ text }}</Typography>
      <Typography variant="h2">h2: {{ text }}</Typography>
      <Typography variant="h3">h3: {{ text }}</Typography>
      <Typography variant="h4">h4: {{ text }}</Typography>
      <Typography variant="h5">h5: {{ text }}</Typography>
      <Typography variant="h6">h6: {{ text }}</Typography>
      <Typography>body-large: {{ text }}</Typography>
      <Typography variant="body-small">body-small: {{ text }}</Typography>
      <Typography variant="body-extra-small">body-extra-small: {{ text }}</Typography>
      <Typography variant="label-large">label-large: {{ text }}</Typography>
      <Typography variant="label-small">label-small: {{ text }}</Typography>
      <Typography variant="button">button: {{ text }}</Typography>
    </div>
  `,
})
