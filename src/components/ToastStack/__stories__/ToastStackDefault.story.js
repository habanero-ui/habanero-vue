import ToastStack from '../index'

const Template = (args, { argTypes }) => ({
  components: { ToastStack },
  props: Object.keys(argTypes),
  template: `<ToastStack v-bind="$props" />`,
})

const ToastStackDefault = Template.bind({})

ToastStackDefault.args = {
  toasts: [
    { id: 1, label: 'First Toast', message: 'Message for the first toast' },
    {
      id: 2,
      label: 'Second Toast',
      message: 'Message for the second toast',
    },
    { id: 3, label: 'Third Toast', message: 'Message for the third toast' },
  ],
}

export default ToastStackDefault
