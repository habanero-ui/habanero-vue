import Avatar from '../index'
export { default as Default } from './AvatarDefault.story'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    firstName: 'Patches',
    image: 'http://placekitten.com/256/256?image=1',
    lastName: `O'Houlihan`,
  },
}
