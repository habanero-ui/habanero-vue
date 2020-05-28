import Button from '../index'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action">
      Hello Button
    </Button>
  `,
  methods: { action: () => console.log('Clicked!') },
})

export const Icon = () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action">
      +
    </Button>
  `,
  methods: { action: () => console.log('Test!') },
})
