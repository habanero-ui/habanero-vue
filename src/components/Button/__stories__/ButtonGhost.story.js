import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action">
      Ghost Button
    </Button>
  `,
  methods: {
    action: () => {
      // eslint-disable-next-line
      console.log('Clicked!')
    },
  },
})
