import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import GlobalStyles from '../src/components/GlobalStyles/index'
import './index.css'

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
)

const GlobalStylesDecorator = addDecorator(() => ({
  components: { GlobalStyles },
  template: `
    <div>
      <GlobalStyles />
      <story />
    </div>
  `,
}))
