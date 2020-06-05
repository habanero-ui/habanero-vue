<template>
  <Typography
    v-if="hex && name"
    variant="body-extra-small"
    @click.native="copyToClipboard"
  >
    <div :class="classes">
      <div>{{ name.replace('-', ' ') }}</div>
      <div>{{ copied ? 'Copied to clipboard!' : hex }}</div>
      <input type="hidden" ref="hex" :value="hex" />
    </div>
  </Typography>
</template>

<script>
import Typography from '../Typography/index'

const tailwindConfig = require('../../../tailwind.config.js')

export default {
  props: {
    name: {
      type: String,
    },
  },
  components: {
    Typography,
  },
  data: () => ({
    copied: false,
  }),
  computed: {
    classes() {
      return ['swatch', `swatch--color-${this.name}`]
    },
    hex() {
      return tailwindConfig.theme.extend.colors[this.name]
    },
  },
  methods: {
    copyToClipboard($event) {
      let value = this.$refs['hex']
      value.setAttribute('type', 'text')
      value.select()

      try {
        document.execCommand('copy')
        this.copied = true

        setTimeout(() => {
          this.copied = false
        }, 1200)
      } catch (err) {
        alert('Could not copy color to clipboard')
      }

      value.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
  },
}
</script>

<style scoped>
.swatch {
  @apply flex items-center justify-between h-12 p-4 capitalize cursor-pointer;
}

/**
  Color - Primary ---------- 
 */
.swatch--color-gold {
  @apply bg-gold text-white;
}
.swatch--color-beige {
  @apply bg-beige text-black;
}
.swatch--color-dark-beige {
  @apply bg-dark-beige text-black;
}

/**
  Color - Surface ---------- 
 */
.swatch--color-white {
  @apply bg-white text-black;
}
.swatch--color-heavy-black {
  @apply bg-heavy-black text-white;
}
.swatch--color-black {
  @apply bg-black text-white;
}
.swatch--color-grey-500 {
  @apply bg-grey-500 text-white;
}
.swatch--color-grey-400 {
  @apply bg-grey-400 text-black;
}
.swatch--color-grey-300 {
  @apply bg-grey-300 text-black;
}
.swatch--color-grey-200 {
  @apply bg-grey-200 text-black;
}
.swatch--color-grey-100 {
  @apply bg-grey-100 text-black;
}

/**
  Color - Secondary ---------- 
 */
.swatch--color-blue {
  @apply bg-blue text-black;
}
.swatch--color-green {
  @apply bg-green text-black;
}
.swatch--color-orange {
  @apply bg-orange text-black;
}
.swatch--color-pink {
  @apply bg-pink text-black;
}
.swatch--color-purple {
  @apply bg-purple text-white;
}

/**
  Color - Supportive ---------- 
 */
.swatch--color-error {
  @apply bg-error text-white;
}
.swatch--color-info {
  @apply bg-info text-white;
}
.swatch--color-success {
  @apply bg-success text-white;
}
.swatch--color-warning {
  @apply bg-warning text-black;
}
</style>
