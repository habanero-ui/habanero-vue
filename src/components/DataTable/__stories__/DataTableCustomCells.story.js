import DataTable from '../index'
import tableData from './tableData.js'
import DataTableMultilineCell from './DataTableMultilineCell'
import DataTableProfileCell from './DataTableProfileCell'

export default () => ({
  components: { DataTable },
  data: () => ({
    columns: [
      {
        name: 'Rank',
        accessor: 'id',
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
    ],
    rows: tableData,
  }),
  template: `
    <div class="p-6"> 
      <DataTable
        :columns="columns"
        :rows="rows"
      />
    </div>
  `,
})