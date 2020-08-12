import Avatar from '../index'

// export default () => ({
//   components: { Avatar },
//   template: `
//     <div class="flex flex-start p-6">
//       <Avatar
//         :firstName="firstName"
//         :image="image"
//         :lastName="lastName" />
//     </div>
//   `,
// })

export const Default = (args) => <Avatar {...args} />
Default.args = {
  firstName: 'Patches',
  image: 'http://placekitten.com/256/256',
  lastName: `O'Houlihan`,
}
