<template>
  <Box backgroundColor="black" component="header">
    <Columns>
      <Column width="content">
        <SlideoverHeaderButton @click.native="onBack">
          <Columns alignY="center" space="medium">
            <Column width="content">
              <Icon
                color="black"
                :colorIsBackground="true"
                name="arrow-left"
                size="small"
              />
            </Column>
            <Column>
              <Typography color="black" :colorIsBackground="true">
                {{ backText }}
              </Typography>
            </Column>
          </Columns>
        </SlideoverHeaderButton>
      </Column>
      <Column />
      <Column width="content">
        <SlideoverHeaderButton
          v-if="onOpenInNewWindow"
          @click.native="onOpenInNewWindow"
        >
          <Columns alignY="center" space="medium">
            <Column>
              <Typography color="black" :colorIsBackground="true">
                {{ openInNewWindowText }}
              </Typography>
            </Column>
            <Column width="content">
              <Icon
                color="black"
                :colorIsBackground="true"
                name="new-window"
                size="small"
              />
            </Column>
          </Columns>
        </SlideoverHeaderButton>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'
import SlideoverHeaderButton from './SlideoverHeaderButton'

export default {
  components: {
    Box,
    Column,
    Columns,
    Icon,
    SlideoverHeaderButton,
    Typography,
  },
  props: {
    backText: {
      default: 'Back',
      type: String,
    },
    onBack: {
      default: undefined,
      type: Function,
    },
    onOpenInNewWindow: {
      default: undefined,
      type: Function,
    },
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
  },
}
</script>
