import DataTable from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTable },
  props: Object.keys(argTypes),
  template: '<DataTable v-bind="$props" />',
})

const DataTableDefault = Template.bind({})

DataTableDefault.argTypes = {
  columns: { table: { disable: true } },
}

DataTableDefault.args = {
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
    },
  ],
}

export default DataTableDefault
