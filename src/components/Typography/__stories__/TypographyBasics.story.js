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
    <div>
      <Typography variant="h1">{{ text }}</Typography>
      <Typography variant="h2">{{ text }}</Typography>
      <Typography variant="h3">{{ text }}</Typography>
      <Typography variant="h4">{{ text }}</Typography>
      <Typography variant="h5">{{ text }}</Typography>
      <Typography variant="h6">{{ text }}</Typography>
      <Typography variant="body-large">{{ text }}</Typography>
      <Typography variant="body-small">{{ text }}</Typography>
      <Typography variant="body-extra-small">{{ text }}</Typography>
      <Typography variant="label-large">{{ text }}</Typography>
      <Typography variant="label-small">{{ text }}</Typography>
      <Typography variant="button">{{ text }}</Typography>
    </div>
  `,
})
