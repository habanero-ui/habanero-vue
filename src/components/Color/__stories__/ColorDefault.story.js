import FormGroup from '../../FormGroup/index'
import Stack from '../../Stack/index'
import Color from '../index'

const Template = (args, { argTypes }) => ({
  components: { Color, FormGroup, Stack },
  props: Object.keys(argTypes),
  template: `
    <Stack space="large">
      <FormGroup v-for="group in groups" :label="group.name" :key="group.name" space="xsmall">
        <Color v-for="color in group.colors" :key="color" :name="color" />
      </FormGroup>
    </Stack>
  `,
})

const ColorDefault = Template.bind({})

ColorDefault.args = {
  groups: [
    {
      name: 'Primary',
      colors: ['gold', 'beige', 'dark-beige'],
    },
    {
      name: 'Secondary',
      colors: ['blue', 'green', 'orange', 'pink', 'purple'],
    },
    {
      name: 'Supportive',
      colors: [
        'border',
        'error',
        'info',
        'offwhite',
        'subtle',
        'success',
        'warning',
      ],
    },
    {
      name: 'Surface',
      colors: ['white', 'heavy-black', 'black'],
    },
  ],
}

export default ColorDefault
