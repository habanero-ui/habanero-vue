import Badge from '../index'

const Template = (args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: `
    <div class="flex"><Badge v-bind="$props" /></div>
  `,
})

const BadgeDefault = Template.bind({})

BadgeDefault.args = {
  color: 'black',
  text: 'Some Text',
}

export default BadgeDefault
