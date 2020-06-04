<template>
  <li :class="classes">
    <Icon v-if="iconName" :name="iconName" />
    <div class="list-item__text">
      <Typography v-if="primaryText" variant="label-large">
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
        variant="body-small"
      >
        {{ tertiaryText }}
      </Typography>
    </div>
    <div class="ml-auto">
      <Typography v-if="primaryStatus" variant="body-extra-small">
        {{ primaryStatus }}
      </Typography>
      <span class="-mr-2" v-if="isNavigation">{{ '>' }}</span>
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
    primaryText: {
      type: [Function, String],
    },
    secondaryText: {
      type: [Function, String],
    },
    tertiaryText: {
      type: [Function, String],
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
  @apply outline-none relative flex flex-none items-center px-6;
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
  @apply text-gray-500 mt-1;
}
</style>
