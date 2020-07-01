<script>
import filter from 'lodash/filter'
import map from 'lodash/map'
import set from 'lodash/set'
import FormGroup from '../FormGroup/index'
import Stack from '../Stack/index'

export default {
  props: {
    error: {
      default: '',
      type: String,
    },
    helperText: {
      default: '',
      type: String,
    },
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
      FormGroup,
      {
        class: 'radio-group',
        props: {
          error: this.error,
          helperText: this.helperText,
          label: this.label,
        },
      },
      [
        h(
          Stack,
          {
            props: { space: 'medium' },
          },
          map(
            filter(this.$slots.default, (vnode) => vnode.tag),
            this.mapSlotNode,
          ),
        ),
      ],
    )
  },
}
</script>
