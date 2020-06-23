<script>
import filter from 'lodash/filter'
import map from 'lodash/map'
import set from 'lodash/set'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  props: {
    label: {
      default: '',
      type: String,
    },
    onValueChange: {
      default: () => {},
      type: Function,
    },
    value: {
      default: undefined,
      type: [Number, String],
    },
  },
  methods: {
    handleButtonIsCheckedChange(value) {
      this.onValueChange(value)
    },

    mapSlotNode(vnode) {
      if (
        !(
          vnode.componentOptions && vnode.componentOptions.tag === 'RadioButton'
        )
      ) {
        return vnode
      }

      const { value } = vnode.componentOptions.propsData
      const isChecked = value === this.value

      return {
        ...set(vnode, 'componentOptions.propsData.isChecked', isChecked),
        ...set(
          vnode,
          'componentOptions.propsData.onIsCheckedChange',
          this.handleButtonIsCheckedChange,
        ),
      }
    },
  },
  render(h) {
    return h(
      Stack,
      {
        class: 'radio-group',
        props: { space: 'xsmall' },
      },
      [
        this.label
          ? h(
              Typography,
              {
                class: 'radio-group__label',
                props: { variant: 'label-large' },
              },
              [this.label],
            )
          : null,
        h('div', { class: 'radio-group__buttons' }, [
          this.$slots.default
            ? map(
                filter(this.$slots.default, (vnode) => vnode.tag),
                this.mapSlotNode,
              )
            : null,
        ]),
      ],
    )
  },
}
</script>
