import orderBy from 'lodash/orderBy'

import DataTable from '../index'
import tableData from './tableData.js'

export default () => ({
  components: { DataTable },
  data: () => ({
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
    rows: tableData,
    sortBy: 'movie.name',
    sortDirection: 'asc',
  }),
  computed: {
    sortedRows() {
      return orderBy(this.rows, this.sortBy, this.sortDirection)
    },
  },
  template: `
    <DataTable
      :columns="columns"
      :onSortByChange="handleSortByChange"
      :onSortDirectionChange="handleSortDirectionChange"
      :rows="sortedRows"
      :sortBy="sortBy"
      :sortDirection="sortDirection"
    />
  `,
  methods: {
    handleSortByChange(sortBy) {
      this.sortBy = sortBy
    },

    handleSortDirectionChange(sortDirection) {
      this.sortDirection = sortDirection
    },
  },
})
