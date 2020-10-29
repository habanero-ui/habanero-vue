import throttle from 'lodash/throttle'

import tailwindConfig from '../../tailwind.config'

export default {
  data: () => ({
    handler: undefined,
    type: 'mobile',
  }),
  computed: {
    ScreenSize() {
      return {
        startWatching: this.startWatching,
        stopWatching: this.stopWatching,
        type: this.type,
      }
    },
  },
  mounted() {
    this.type = getScreenSizeType()
  },
  methods: {
    startWatching() {
      if (this.handler) return

      this.handler = throttle(() => {
        this.type = getScreenSizeType()
      })

      window.addEventListener('resize', this.handler)
    },

    stopWatching() {
      if (!this.handler) return

      window.removeEventListener('resize', this.handler)
    },
  },
}

function getScreenSizeType() {
  if (
    window.innerWidth >=
    parseInt(tailwindConfig.theme.extend.screens.lg.replace('px', ''), 10)
  ) {
    return 'desktop'
  }

  if (
    window.innerWidth >=
    parseInt(tailwindConfig.theme.extend.screens.sm.replace('px', ''), 10)
  ) {
    return 'tablet'
  }

  return 'mobile'
}
