import { object } from '@storybook/addon-knobs'
import Table from '../index'
import tableData from './TableData.json'

export default () => ({
  components: { Table },
  props: {
    columns: {
      default: object('Columns', [
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
          key: 'movie.director',
          accessor: (value) => {
            return `${value.firstName} ${value.lastName}`
          },
        },
        {
          name: 'Budget',
          key: 'movie.costCents',
          accessor: (value) => {
            return value
              ? `$${(value / 100)
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
        { name: 'IMDB Rating', key: 'rating' },
      ]),
    },
    tableData: {
      default: object('Table Data', tableData),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Table :columns="columns" :tableData="tableData" />
    </div>
  `,
})
