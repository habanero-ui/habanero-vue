import { action } from '@storybook/addon-actions'

import Box from '../../Box/index'
import Button from '../../Button/index'
import ListItem from '../../ListItem/index'
import Stack from '../../Stack/index'
import Menu from '../index'

export default () => ({
  components: { Box, Button, ListItem, Menu, Stack },
  data: () => ({
    items: [
      {
        text: 'Download CSV',
      },
      {
        text: 'Download XLS',
      },
    ],
  }),
  template: `
    <div class="absolute inset-0 flex items-center justify-center">
      <Menu :items="items">
        <Button
          iconName="menu"
          iconSize="medium"
          size="medium"
          variant="text" />
      </Menu>
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
