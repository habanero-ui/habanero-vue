<template>
  <div :class="classes">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109 40"
      width="109"
      height="40"
    >
      <path
        d="M108.58 15.264C108.58 6.689 102.079 0 91.877 0H76.335c-2.886 0-5.253 1.115-6.801 2.914A8.884 8.884 0 0062.948 0h-6.717c-2.152 0-4.133.814-5.684 2.144C48.051.77 44.994 0 41.507 0H21.614C10.725 0 3.146 10.119 6.89 18.479c-4.348.6-6.888 4.16-6.888 8.102 0 7.162 7.49 13.378 16.145 13.378 3.703 0 6.888-.944 9.472-2.615 1.634 1.758 3.962 2.615 6.198 2.615 3.875 0 7.578-2.485 8.826-6.645l.646-2.187c3.014.043 5.684-.6 8.093-2.016C50.629 35.585 55.967 40 63.892 40c4.564 0 8.351-1.286 11.194-3.772 1.594 2.358 3.962 3.731 7.103 3.731 3.4 0 6.673-1.929 8.267-5.231l3.445 2.957c1.594 1.373 3.787 2.144 6.07 2.144 5.554 0 8.782-4.374 8.782-8.447 0-2.573-1.378-5.018-3.615-6.646 2.152-2.613 3.444-5.872 3.444-9.473zm-51.065-2.055c.087-.256-.043-.426-.3-.426h-1.197c-1.925 0-3.55-1.617-3.55-3.534 0-1.917 1.625-3.534 3.55-3.534h6.673c2.396 0 4.277 2.343 3.509 4.985l-3.937 13.63c-.641 2.3.301 3.791 2.182 3.791 1.498 0 2.396-.895 2.995-2.895L72.358 8.23c.428-1.534 1.839-2.513 3.636-2.513h15.442c6.717 0 11.462 4.173 11.462 10.053 0 4.217-2.44 7.498-6.202 9.072l4.962 4.09c.856.725 1.37 1.617 1.37 2.812 0 1.873-1.453 3.494-3.592 3.494-.942 0-1.925-.383-2.694-1.065l-9.326-8.145-1.798 6.22c-.514 1.79-2.138 2.981-3.806 2.981-2.523 0-4.19-2.556-3.508-4.855l3.508-12.013c.515-1.704 2.095-2.77 3.806-2.77 2.266 0 3.723 1.875 3.509 4.26 3.037.683 5.988-.851 5.988-3.62 0-2.087-1.797-3.451-4.107-3.451H79.373c-.3 0-.514.17-.598.469L74.84 26.838c-1.584 5.451-5.474 8.393-11.208 8.393-6.93 0-10.864-5.155-8.983-11.8l2.867-10.22zM11.654 25.054c1.196 2.173 2.565 3.238 4.445 3.238 1.539 0 2.691-.639 2.691-1.96 0-3.281-7.78-4.047-7.78-11.246 0-5.198 4.575-9.372 10.258-9.372h19.748c6.712 0 11.454 4.134 11.454 10.011 0 6.39-5.172 10.65-11.797 10.65-1.155 0-2.35-.126-3.59-.383l-1.836 6.264c-.514 1.79-2.137 2.982-3.804 2.982-2.52 0-4.23-2.556-3.546-4.856l3.506-12.014c.514-1.704 2.094-2.77 3.803-2.77 2.308 0 3.76 1.918 3.547 4.26 3.162.683 5.94-.808 5.94-3.577 0-2.13-1.623-3.494-4.147-3.494H21.27c-1.369 0-2.394.808-2.394 1.873 0 2.726 7.78 4.773 7.78 10.777 0 5.708-4.531 9.755-10.812 9.755-6.668 0-11.07-4.985-11.07-8.393 0-2.13 1.71-3.664 3.633-3.664a3.733 3.733 0 013.249 1.92z"
      />
    </svg>
  </div>
</template>

<script>
import colors from '../../constants/colors'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      color: [...colors, 'white'],
    }),
  ],
  props: {
    color: {
      default: 'black',
      type: String,
    },
    colorIsBackground: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    classes() {
      return [
        'logo',
        {
          'logo--color-is-background': this.colorIsBackground,
        },
        `logo--color-${this.color}`,
      ]
    },
  },
}
</script>

<style scoped>
.logo > svg {
  @apply fill-current w-full h-auto;
}
.logo--color-black {
  @apply text-black;
}
.logo--color-black.logo--color-is-background {
  @apply text-white;
}
.logo--color-blue {
  @apply text-blue;
}
.logo--color-blue.logo--color-is-background {
  @apply text-black;
}
.logo--color-border {
  @apply text-border;
}
.logo--color-border.logo--color-is-background {
  @apply text-black;
}
.logo--color-error {
  @apply text-error;
}
.logo--color-error.logo--color-is-background {
  @apply text-white;
}
.logo--color-gold {
  @apply text-gold;
}
.logo--color-gold.logo--color-is-background {
  @apply text-white;
}
.logo--color-green {
  @apply text-green;
}
.logo--color-green.logo--color-is-background {
  @apply text-black;
}
.logo--color-info {
  @apply text-info;
}
.logo--color-info.logo--color-is-background {
  @apply text-white;
}
.logo--color-orange {
  @apply text-orange;
}
.logo--color-orange.logo--color-is-background {
  @apply text-black;
}
.logo--color-pink {
  @apply text-pink;
}
.logo--color-pink.logo--color-is-background {
  @apply text-black;
}
.logo--color-purple {
  @apply text-purple;
}
.logo--color-purple.logo--color-is-background {
  @apply text-black;
}
.logo--color-offwhite {
  @apply text-offwhite;
}
.logo--color-offwhite.logo--color-is-background {
  @apply text-black;
}
.logo--color-subtle {
  @apply text-subtle;
}
.logo--color-subtle.logo--color-is-background {
  @apply text-white;
}
.logo--color-success {
  @apply text-success;
}
.logo--color-success.logo--color-is-background {
  @apply text-white;
}
.logo--color-warning {
  @apply text-warning;
}
.logo--color-warning.logo--color-is-background {
  @apply text-black;
}
</style>
