import variants from '../../../constants/buttonVariants'
import colors from '../../../constants/colors'
import Column from '../../Column/index'
import Columns from '../../Columns/index'
import Stack from '../../Stack/index'
import Button from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button, Column, Columns, Stack },
  props: Object.keys(argTypes),
  template: `
    <Stack class="p-6" space="4">
      <Columns v-for="color in colors" alignY="center" :key="color" space="4">
        <Column v-for="variant in variants" :key="variant" width="content">
          <Button
            v-bind="$props"
            :color="color"
            :text="text"
            :variant="variant"
          />
        </Column>
      </Columns>
    </Stack>
  `,
})

const ButtonColorsAndVariants = Template.bind({})

ButtonColorsAndVariants.args = {
  colors,
  text: 'Text',
  variants,
}

export default ButtonColorsAndVariants
