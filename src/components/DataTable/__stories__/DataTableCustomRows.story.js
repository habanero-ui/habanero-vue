import DataTable from '../index'
import DataTableMultilineCell from './DataTableMultilineCell'
import DataTableStatusRow from './DataTableStatusRow'

const Template = (args, { argTypes }) => ({
  components: { DataTable },
  props: Object.keys(argTypes),
  template: `<DataTable v-bind="$props" :columns="columns" />`,
})

const DataTableCustomRows = Template.bind({})

DataTableCustomRows.argTypes = {
  columns: { table: { disable: true } },
}

DataTableCustomRows.args = {
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
}

export default DataTableCustomRows
