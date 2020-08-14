import { addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

import GlobalStyles from '../src/components/GlobalStyles/index'
import './index.css'

export const parameters = {
  layout: 'centered',
}

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
