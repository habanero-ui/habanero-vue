import Breadcrumb from '../../Breadcrumb/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumb, Breadcrumbs },
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumbs>
        <Breadcrumb />
        <Breadcrumb />
        <Breadcrumb />
        <Breadcrumb />
      </Breadcrumbs>
    </div>
  `,
})
