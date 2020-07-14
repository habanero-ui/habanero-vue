import { text } from '@storybook/addon-knobs'

import Typography from '../../Typography/index'
import SearchInput from '../index'

export default () => ({
  components: { SearchInput, Typography },
  props: {
    value: {
      default: text('value', 'Query Value'),
    },
  },
  data: () => ({
    searchedValue: 'Query Value',
  }),
  template: `
    <div class="flex flex-col p-6">
      <SearchInput
        :delay="500"
        :onSearch="handleSearch"
        :value="value"
      />
      <Typography>
        {{ searchedValue }}
      </Typography>
    </div>
  `,
  methods: {
    handleSearch(searchedValue) {
      this.searchedValue = searchedValue
    },
  },
})
