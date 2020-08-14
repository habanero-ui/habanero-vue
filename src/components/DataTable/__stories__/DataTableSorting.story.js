import orderBy from 'lodash/orderBy'

import DataTable from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTable },
  props: Object.keys(argTypes),
  data: () => ({
    sortByState: 'movie.name',
    sortDirectionState: 'asc',
  }),
  computed: {
    sortedRows() {
      return orderBy(this.rows, this.sortByState, this.sortDirectionState)
    },
  },
  template: `
    <DataTable
      v-bind="$props"
      :onSortByChange="handleSortByChange"
      :onSortDirectionChange="handleSortDirectionChange"
      :rows="sortedRows"
      :sortBy="sortByState"
      :sortDirection="sortDirectionState"
    />
  `,
  methods: {
    handleSortByChange(sortBy) {
      this.sortByState = sortBy
    },

    handleSortDirectionChange(sortDirection) {
      this.sortDirectionState = sortDirection
    },
  },
})

const DataTableSorting = Template.bind({})

DataTableSorting.argTypes = {
  columns: { table: { disable: true } },
  sortBy: { table: { disable: true } },
  sortDirection: { table: { disable: true } },
}

DataTableSorting.args = {
  columns: [
    {
      name: 'Rank',
      key: 'id',
      isSortable: true,
    },
    {
      name: 'Movie',
      key: 'movie.name',
      isSortable: true,
    },
    {
      name: 'Director',
      getValue: ({ movie }) => {
        return `${movie.director.firstName} ${movie.director.lastName}`
      },
      isSortable: true,
      key: 'movie.director.firstName',
    },
    {
      name: 'Budget',
      getValue: ({ movie }) => {
        return movie.costCents
          ? `$${(movie.costCents / 100)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
          : 'N/A'
      },
      isSortable: true,
      key: 'movie.costCents',
    },
    {
      name: 'Release Year',
      key: 'movie.year',
      isSortable: true,
    },
    {
      name: 'IMDB Rating',
      key: 'rating',
    },
  ],
}

export default DataTableSorting
