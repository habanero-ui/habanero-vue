import Box from '../../Box/index'
import Button from '../../Button/index'
import ListItem from '../../ListItem/index'
import Stack from '../../Stack/index'
import Menu from '../index'

export default (args, { argTypes }) => ({
  components: { Box, Button, ListItem, Menu, Stack },
  props: Object.keys(argTypes),
  template: `
    <div class="absolute inset-0 flex items-center justify-center">
      <Menu v-bind="$props">
        <Button iconName="menu" iconSize="medium" variant="text" />
      </Menu>
    </div>
  `,
})
