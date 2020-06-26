import Link from '../../Link/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumbs, Link },
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumbs>
        <Link>Alpha</Link>
        <Link>Bravo</Link>
        <Link>Charlie</Link>
        <Link>Delta</Link>
      </Breadcrumbs>
    </div>
  `,
})
