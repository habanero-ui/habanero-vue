import Badge from '../index'

const Template = (args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: `
    <Badge v-bind="$props" />
  `,
})

const BadgeDefault = Template.bind({})

BadgeDefault.args = {
  color: 'black',
  text: 'Some Text',
}

export default BadgeDefault
