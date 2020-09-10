import find from 'lodash/find'

import Box from '../../Box/index'
import Button from '../../Button/index'
import ListItem from '../../ListItem/index'
import Drawer from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box, Button, Drawer, ListItem },
  props: Object.keys(argTypes),
  data: () => ({
    indicatorTransform: undefined,
    isMounted: false,
    isOpenState: true,
    items: [
      { icon: 'hotel', id: 1, text: 'Accounts' },
      { icon: 'flag', id: 2, text: 'Positions' },
      { icon: 'file-download', id: 3, text: 'Invoices' },
      { icon: 'bell', id: 4, text: 'Notifications' },
      { icon: 'badge', id: 5, text: 'Workers' },
    ],
    selectedId: 2,
  }),
  template: `
    <div
      class="absolute flex inset-0"
      :class="{ 'flex-row-reverse': position === 'right' }"
    >
      <Drawer v-bind="$props" :isOpen="isOpenState" :onIsOpenChange="handleIsOpenChange">
        <Box backgroundColor="black" class="flex-1 relative">
          <ListItem
            v-for="item in items"
            backgroundColor="black"
            :colorIsBackground="!getIsSelected(item)"
            :data-id="item.id"
            :iconColor="getIsSelected(item) ? 'gold' : undefined"
            :iconName="item.icon"
            :key="item.id"
            :primaryText="item.text"
            :primaryTextColor="getIsSelected(item) ? 'gold' : undefined"
            ref="items"
            @click.native="() => handleItemSelected(item)"
          />
          <Box
            backgroundColor="gold"
            class="absolute left-0 top-0 w-1 transition-all duration-200 ease"
            :style="{
              borderBottomRightRadius: '5px',
              borderTopRightRadius: '5px',
              height: '56px',
              transform: indicatorTransform,
            }"
          />
        </Box>
      </Drawer>
      <div class="flex flex-1 p-6">
        <div>
          <Button
            text="Toggle Drawer"
            @click.native="handleToggleDrawerClick"
          />
        </div>
      </div>
    </div>
  `,
  mounted() {
    this.updateIndicatorTransform()
  },
  watch: {
    selectedId() {
      this.updateIndicatorTransform()
    },
  },
  methods: {
    getIsSelected({ id }) {
      return this.selectedId === id
    },

    handleIsOpenChange(isOpen) {
      this.isOpenState = isOpen
    },

    handleItemSelected({ id }) {
      if (this.selectedId === id) return

      this.selectedId = id
    },

    handleToggleDrawerClick() {
      this.isOpenState = !this.isOpenState
    },

    updateIndicatorTransform() {
      if (!this.selectedId) return

      const selectedItem = find(
        this.$refs.items,
        ({ $attrs }) => $attrs['data-id'] === this.selectedId,
      )

      if (!selectedItem) return

      this.indicatorTransform = `translateY(${selectedItem.$el.offsetTop}px)`
    },
  },
})

const DrawerSidebar = Template.bind({})

DrawerSidebar.argTypes = {
  isOpen: { table: { disable: true } },
  mode: { table: { disable: true } },
  onIsOpenChange: { table: { disable: true } },
  position: { table: { disable: true } },
}

DrawerSidebar.args = {
  mode: 'push',
}

export default DrawerSidebar
