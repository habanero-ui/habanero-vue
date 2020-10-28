import throttle from 'lodash/throttle'

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
  if (window.innerWidth >= 992) {
    return 'desktop'
  }

  if (window.innerWidth >= 576) {
    return 'tablet'
  }

  return 'mobile'
}
