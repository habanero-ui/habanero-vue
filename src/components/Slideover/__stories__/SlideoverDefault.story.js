import Slideover from '../index'

export default ((args, { argTypes }) => ({
  components: { Slideover },
  props: Object.keys(argTypes),
  template: `
    <div style="height: 4000px">
      <Slideover
        v-bind="$props"
        :onCancel="isCancelVisible ? onCancel : undefined"
        :onConfirm="isConfirmVisible ? onConfirm : undefined"
        :onDestroy="isDestroyVisible ? onDestroy : undefined"
        :onOpenInNewWindow="isOpenInNewWindowVisible ? onOpenInNewWindow : undefined">
        <div class="flex-none" style="background: linear-gradient(to bottom right, #36d, #fff); height: 4000px;">
          Some Scrolling Content
        </div>
      </Slideover>
    </div>
  `,
})).bind({})
