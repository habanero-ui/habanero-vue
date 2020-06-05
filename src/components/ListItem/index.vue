<template>
  <li :class="classes">
    <Icon v-if="iconName" class="mr-4 -ml-2" :name="iconName" />
    <div class="list-item__text">
      <Typography v-if="primaryText">
        {{ primaryText }}
      </Typography>
      <Typography
        v-if="secondaryText"
        class="list-item__text__line--secondary"
        variant="body-small"
      >
        {{ secondaryText }}
      </Typography>
      <Typography
        v-if="tertiaryText"
        class="list-item__text__line--tertiary"
        color="subtle"
        variant="body-small"
      >
        {{ tertiaryText }}
      </Typography>
    </div>
    <div class="flex items-center ml-auto">
      <Typography
        v-if="primaryStatusText"
        :class="isNavigation && 'mr-2'"
        :color="primaryStatusTextColor"
        variant="body-extra-small"
      >
        {{ primaryStatusText }}
      </Typography>
      <Icon v-if="isNavigation" class="-mr-2" name="chevron-right" />
    </div>
  </li>
</template>

<script>
import isNil from 'lodash/isNil'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Icon, Typography },
  props: {
    iconName: {
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
      type: String,
    },
    primaryStatusTextColor: {
      default: 'subtle',
      type: String,
    },
    primaryText: {
      type: String,
    },
    secondaryText: {
      type: String,
    },
    tertiaryText: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'list-item',
        {
          'list-item--actionable': this.isActionable,
          'list-item--lines-single':
            !isNil(this.primaryText) &&
            isNil(this.secondaryText) &&
            isNil(this.tertiaryText),
          'list-item--lines-double':
            !isNil(this.primaryText) &&
            !isNil(this.secondaryText) &&
            isNil(this.tertiaryText),
          'list-item--lines-triple': !(
            isNil(this.primaryText) ||
            isNil(this.secondaryText) ||
            isNil(this.tertiaryText)
          ),
        },
      ]
    },
  },
}
</script>

<style scoped>
.list-item {
  @apply outline-none relative flex flex-none items-center px-6 border-b border-gray-300;
}
.list-item--actionable {
  @apply cursor-pointer;
}
.list-item--actionable::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: #000;
  content: '';
}
.list-item--actionable:hover::after {
  opacity: 0.1;
}
.list-item--actionable:active::after {
  opacity: 0.25;
}
.list-item--lines-single {
  height: 2.75rem;
}
.list-item--lines-double {
  height: 4rem;
}
.list-item--lines-triple {
  height: 5.25rem;
}
.list-item__text__line--secondary {
  @apply mt-1;
}
.list-item__text__line--tertiary {
  @apply mt-1;
}
</style>
