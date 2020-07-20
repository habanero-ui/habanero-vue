import map from 'lodash/map'

import DataTable from '../index'
import DataTableCheckboxCell from './DataTableCheckboxCell'
import DataTableMultilineCell from './DataTableMultilineCell'
import DataTableProfileCell from './DataTableProfileCell'
import tableData from './tableData.js'

export default () => ({
  components: { DataTable },
  data: () => ({
    rows: tableData,
  }),
  computed: {
    columns() {
      return [
        {
          name: 'Rank',
          key: 'id',
        },
        {
          name: 'Seen?',
          key: 'movie.seen',
          cellComponent: DataTableCheckboxCell,
          onRowChange: this.handleRowChange,
        },
        {
          name: 'Movie',
          key: 'movie.name',
          cellComponent: DataTableProfileCell,
        },
        {
          name: 'Director',
          getValue: ({ movie }) => {
            return `${movie.director.firstName} ${movie.director.lastName}`
          },
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
          key: 'movie.costCents',
        },
        {
          name: 'Release Year',
          key: 'movie.year',
        },
        {
          name: 'IMDB Rating',
          key: 'rating',
          cellComponent: DataTableMultilineCell,
        },
      ]
    },
  },
  template: `
    <div class="p-6"> 
      <DataTable
        :columns="columns"
        :rows="rows"
      />
    </div>
  `,
  methods: {
    handleRowChange(changedRow) {
      this.rows = map(this.rows, (row) =>
        row.id === changedRow.id ? changedRow : row,
      )
    },
  },
})
