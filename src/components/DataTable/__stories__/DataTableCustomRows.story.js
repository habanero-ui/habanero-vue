import DataTable from '../index'
import DataTableMultilineCell from './DataTableMultilineCell'
import DataTableStatusRow from './DataTableStatusRow'
import tableData from './tableData.js'

export default () => ({
  components: { DataTable },
  data: () => ({
    columns: [
      {
        name: 'Rank',
        key: 'id',
      },
      {
        name: 'Movie',
        key: 'movie.name',
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
    ],
    rowComponent: DataTableStatusRow,
    rows: tableData,
  }),
  template: `
    <DataTable
      :columns="columns"
      :rowComponent="rowComponent"
      :rows="rows"
    />
  `,
})
