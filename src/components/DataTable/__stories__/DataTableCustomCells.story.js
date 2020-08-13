import { action } from '@storybook/addon-actions'
import filter from 'lodash/filter'
import map from 'lodash/map'

import DataTableActionCell from '../../DataTableActionCell/index'
import DataTableCheckboxCell from '../../DataTableCheckboxCell/index'
import DataTable from '../index'
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
          onIsCheckedChange: this.handleSeenChange,
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
        ...(this.rows.length > 1
          ? [
              {
                name: '',
                cellComponent: DataTableActionCell,
                getIsVisible: (row) =>
                  row.movie.name !== 'The Shawshank Redemption',
                iconName: 'close',
                onClick: this.handleRowDelete,
              },
            ]
          : []),
      ]
    },
  },
  template: `
    <DataTable
      :columns="columns"
      :onRowSelect="onRowSelect"
      :rows="rows"
    />
  `,
  methods: {
    handleSeenChange({ id }, seen) {
      this.rows = map(this.rows, (row) =>
        row.id === id ? { ...row, movie: { ...row.movie, seen } } : row,
      )
    },

    handleRowDelete(changedRow) {
      this.rows = filter(this.rows, (row) => row.id !== changedRow.id)
    },

    onRowSelect: action('onRowSelect'),
  },
})
