import SingleSelect from '../index'

export default (args, { argTypes }) => ({
  components: { SingleSelect },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <SingleSelect
        v-bind="$props"
        :getAvatarFirstName="isAvatarFirstNameEnabled ? getAvatarFirstName : undefined"
        :getAvatarImage="isAvatarImageEnabled ? getAvatarImage : undefined"
        :getAvatarLastName="isAvatarLastNameEnabled ? getAvatarLastName : undefined"
        :getIconName="isIconEnabled ? getIconName : undefined"
        :getPrimaryStatusText="isPrimaryStatusTextEnabled ? getPrimaryStatusText : undefined"
        :getSecondaryText="isSecondaryTextEnabled ? getSecondaryText : undefined"
        :getTertiaryText="isTertiaryTextEnabled ? getTertiaryText : undefined"
      />
    </div>
  `,
})
