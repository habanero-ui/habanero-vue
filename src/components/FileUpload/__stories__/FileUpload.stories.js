import { action } from '@storybook/addon-actions'

import FileUpload from '../index'
export { default as Default } from './FileUploadDefault.story'

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  args: {
    accept: 'image/x-png,application/pdf,image/jpeg,image/jpg',
    buttonVariant: 'primary',
    isLoading: false,
    onChange: action('onChange'),
    text: 'Select File',
  },
}
