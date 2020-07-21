<template>
  <Box
    class="list-item"
    component="li"
    paddingX="gutter"
    paddingY="medium"
    :showInteractionOverlay="isActionable"
  >
    <Columns class="flex-1" alignY="center" space="gutter">
      <Column v-if="iconName" width="content"><Icon :name="iconName" /></Column>
      <Column>
        <Stack space="xxsmall">
          <Typography v-if="primaryText" variant="label-large">
            {{ primaryText }}
          </Typography>
          <Typography v-if="secondaryText" variant="body-small">
            {{ secondaryText }}
          </Typography>
          <Typography v-if="tertiaryText" color="subtle" variant="body-small">
            {{ tertiaryText }}
          </Typography>
        </Stack>
      </Column>
      <Column v-if="primaryStatusText" width="content">
        <Typography :color="primaryStatusTextColor" variant="body-extra-small">
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
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Icon, Stack, Typography },
  props: {
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
    secondaryText: {
      default: undefined,
      type: String,
    },
    tertiaryText: {
      default: undefined,
      type: String,
    },
  },
}
</script>

<style scoped>
.list-item {
  @apply flex flex-none;
}
</style>
