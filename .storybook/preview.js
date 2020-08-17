import GlobalStyles from '../src/components/GlobalStyles/index'
import map from 'lodash/map'
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import tailwindConfig from '../tailwind.config'
import './index.css'

Vue.use(VueCompositionAPI)

export const parameters = {
  backgrounds: {
    values: map(Object.keys(tailwindConfig.theme.extend.colors), (name) => ({
      name,
      value: tailwindConfig.theme.extend.colors[name],
    })),
  },
  layout: 'centered',
}

export const decorators = [
  () => ({
    components: { GlobalStyles },
    template: `
    <div>
      <GlobalStyles />
      <story />
    </div>
  `,
  }),
]
