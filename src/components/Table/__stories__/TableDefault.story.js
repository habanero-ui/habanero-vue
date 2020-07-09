import { object } from '@storybook/addon-knobs'
import Table from '../index'

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
      default: object('Table Data', [
        {
          id: 1,
          movie: {
            name: 'The Shawshank Redemption',
            costCents: 2500000000,
            director: {
              firstName: 'Rob',
              lastName: 'Marshall',
            },
            year: 1994,
          },
          rating: 9.2,
        },
        {
          id: 2,
          movie: {
            name: 'The Godfather',
            costCents: 600000000,
            director: {
              firstName: 'Francis Ford',
              lastName: 'Coppola',
            },
            year: 1972,
          },
          rating: 9.1,
        },
        {
          id: 3,
          movie: {
            name: 'The Godfather: Part II',
            costCents: 1300000000,
            director: {
              firstName: 'Francis Ford',
              lastName: 'Coppola',
            },
            year: 1974,
          },
          rating: 9.0,
        },
        {
          id: 4,
          movie: {
            name: 'The Dark Knight',
            costCents: 18500000000,
            director: {
              firstName: 'Christopher',
              lastName: 'Nolan',
            },
            year: 2008,
          },
          rating: 9.0,
        },
        {
          id: 5,
          movie: {
            name: '12 Angry Men',
            costCents: 35000000,
            director: {
              firstName: 'Sidney',
              lastName: 'Lumet',
            },
            year: 1957,
          },
          rating: 8.9,
        },
        {
          id: 6,
          movie: {
            name: "Schindler's List",
            costCents: 2200000000,
            director: {
              firstName: 'Steven',
              lastName: 'Spielberg',
            },
            year: 1993,
          },
          rating: 8.9,
        },
        {
          id: 7,
          movie: {
            name: 'The Lord of the Rings: The Return of the King',
            costCents: 9400000000,
            director: {
              firstName: 'Peter',
              lastName: 'Jackson',
            },
            year: 2003,
          },
          rating: 8.9,
        },
        {
          id: 8,
          movie: {
            name: 'Pulp Fiction',
            costCents: 800000000,
            director: {
              firstName: 'Quentin',
              lastName: 'Tarantino',
            },
            year: 1994,
          },
          rating: 8.9,
        },
        {
          id: 9,
          movie: {
            name: 'The Good, the Bad and the Ugly',
            costCents: 120000000,
            director: {
              firstName: 'Sergio',
              lastName: 'Leone',
            },
            year: 1966,
          },
          rating: 8.8,
        },
        {
          id: 10,
          movie: {
            name: 'The Lord of the Rings: The Fellowship of the Ring',
            costCents: 9300000000,
            director: {
              firstName: 'Peter',
              lastName: 'Jackson',
            },
            year: 2001,
          },
          rating: 8.8,
        },
      ]),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Table :columns="columns" :tableData="tableData" />
    </div>
  `,
})
