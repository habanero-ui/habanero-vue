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
          accessor: 'id',
        },
        {
          name: 'Seen?',
          cellComponent: DataTableCheckboxCell,
          onRowChange: this.handleRowChange,
        },
        {
          name: 'Movie',
          accessor: 'movie.name',
          cellComponent: DataTableProfileCell,
        },
        {
          name: 'Director',
          accessor: ({ movie }) => {
            return `${movie.director.firstName} ${movie.director.lastName}`
          },
        },
        {
          name: 'Budget',
          accessor: ({ movie }) => {
            return movie.costCents
              ? `$${(movie.costCents / 100)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              : 'N/A'
          },
        },
        {
          name: 'Release Year',
          accessor: 'movie.year',
        },
        {
          name: 'IMDB Rating',
          accessor: 'rating',
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
