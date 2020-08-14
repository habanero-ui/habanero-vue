import Profile from '../index'
export { default as Default } from './ProfileDefault.story'

export default {
  title: 'Profile',
  component: Profile,
  args: {
    firstName: 'Patches',
    image: 'http://placekitten.com/256/256',
    lastName: "O'Houlihan",
    subtitle: 'the Cat',
  },
}
