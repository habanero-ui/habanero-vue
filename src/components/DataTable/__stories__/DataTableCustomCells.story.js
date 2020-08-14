import filter from 'lodash/filter'
import map from 'lodash/map'

import DataTableActionCell from '../../DataTableActionCell/index'
import DataTableCheckboxCell from '../../DataTableCheckboxCell/index'
import DataTable from '../index'
import DataTableMultilineCell from './DataTableMultilineCell'
import DataTableProfileCell from './DataTableProfileCell'
import tableData from './tableData'

export default ((args, { argTypes }) => ({
  components: { DataTable },
  props: Object.keys(argTypes),
  data: () => ({
    rowsState: tableData,
  }),
  computed: {
    columnsState() {
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
  template: `<DataTable v-bind="$props" :columns="columnsState" :rows="rowsState" />`,
  methods: {
    handleRowDelete(changedRow) {
      this.rowsState = filter(this.rowsState, (row) => row.id !== changedRow.id)
    },

    handleSeenChange({ id }, seen) {
      this.rowsState = map(this.rowsState, (row) =>
        row.id === id ? { ...row, movie: { ...row.movie, seen } } : row,
      )
    },
  },
})).bind({})
