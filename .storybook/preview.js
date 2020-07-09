import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import './index.css'

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
)
