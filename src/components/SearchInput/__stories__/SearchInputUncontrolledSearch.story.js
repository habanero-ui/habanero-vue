import Typography from '../../Typography/index'
import SearchInput from '../index'

const Template = (args, { argTypes }) => ({
  components: { SearchInput, Typography },
  props: Object.keys(argTypes),
  data: () => ({
    searchedValue: 'Query Value',
  }),
  template: `
    <div>
      <SearchInput v-bind="$props" :onSearch="handleSearch" />
      <Typography>{{ searchedValue }}</Typography>
    </div>`,
  methods: {
    handleSearch(searchedValue) {
      this.searchedValue = searchedValue
    },
  },
})

const SearchInputUncontrolledSearch = Template.bind({})

SearchInputUncontrolledSearch.args = {
  onValueChange: null,
}

export default SearchInputUncontrolledSearch
