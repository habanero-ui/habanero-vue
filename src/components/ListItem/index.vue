<template>
  <Box
    :backgroundColor="backgroundColor"
    class="list-item"
    component="li"
    paddingX="gutter"
    paddingY="medium"
    :showInteractionOverlay="isActionable"
  >
    <Columns class="flex-1" alignY="center" space="gutter">
      <Column v-if="isAvatarVisible" width="content">
        <Avatar
          :firstName="avatarFirstName"
          :image="avatarImage"
          :lastName="avatarLastName"
        />
      </Column>
      <Column v-if="iconName" width="content">
        <Icon
          :color="iconColor"
          :colorIsBackground="isSelected"
          :name="iconName"
        />
      </Column>
      <Column>
        <Stack space="xxsmall">
          <Typography
            v-if="primaryText"
            :color="primaryTextColor"
            :colorIsBackground="isSelected"
            variant="label-large"
          >
            {{ primaryText }}
          </Typography>
          <Typography
            v-if="secondaryText"
            :color="secondaryTextColor"
            :colorIsBackground="isSelected"
            variant="body-small"
          >
            {{ secondaryText }}
          </Typography>
          <Typography
            v-if="tertiaryText"
            :color="tertiaryTextColor"
            :colorIsBackground="isSelected"
            variant="body-small"
          >
            {{ tertiaryText }}
          </Typography>
        </Stack>
      </Column>
      <Column v-if="primaryStatusText" width="content">
        <Typography
          :color="primaryStatusTextColor"
          :colorIsBackground="isSelected"
          variant="body-extra-small"
        >
          {{ primaryStatusText }}
        </Typography>
      </Column>
      <Column v-if="isNavigation" width="content">
        <Icon class="-mx-2 -my-1" name="chevron-right" />
      </Column>
    </Columns>
  </Box>
</template>

<script>
import Avatar from '../Avatar/index'
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: { Avatar, Box, Column, Columns, Icon, Stack, Typography },
  props: {
    avatarFirstName: {
      default: '',
      type: String,
    },
    avatarImage: {
      default: '',
      type: String,
    },
    avatarLastName: {
      default: '',
      type: String,
    },
    iconColor: {
      default: 'black',
      type: String,
    },
    iconName: {
      default: undefined,
      type: String,
    },
    isActionable: {
      default: true,
      type: Boolean,
    },
    isNavigation: {
      default: false,
      type: Boolean,
    },
    isSelected: {
      default: false,
      type: Boolean,
    },
    primaryStatusText: {
      default: undefined,
      type: String,
    },
    primaryStatusTextColor: {
      default: 'subtle',
      type: String,
    },
    primaryText: {
      default: undefined,
      type: String,
    },
    primaryTextColor: {
      default: 'black',
      type: String,
    },
    secondaryText: {
      default: undefined,
      type: String,
    },
    secondaryTextColor: {
      default: 'black',
      type: String,
    },
    tertiaryText: {
      default: undefined,
      type: String,
    },
    tertiaryTextColor: {
      default: 'subtle',
      type: String,
    },
  },
  computed: {
    backgroundColor() {
      return this.isSelected ? 'info' : undefined
    },

    isAvatarVisible() {
      return this.avatarFirstName || this.avatarImage || this.avatarLastName
    },
  },
}
</script>

<style scoped>
.list-item {
  @apply flex flex-none;
}
</style>
