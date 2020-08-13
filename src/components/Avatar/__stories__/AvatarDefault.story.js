import Avatar from '../index'

const Template = (args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: `
    <Avatar v-bind="$props" />
  `,
})

const AvatarDefault = Template.bind({})

AvatarDefault.args = {
  firstName: 'Patches',
  image: 'http://placekitten.com/256/256',
  lastName: `O'Houlihan`,
}

export default AvatarDefault
