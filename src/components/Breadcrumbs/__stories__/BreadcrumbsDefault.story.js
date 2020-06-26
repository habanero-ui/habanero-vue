import TextLink from '../../TextLink/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumbs, TextLink },
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumbs>
        <TextLink>Alpha</TextLink>
        <TextLink>Bravo</TextLink>
        <TextLink>Charlie</TextLink>
        <TextLink>Delta</TextLink>
      </Breadcrumbs>
    </div>
  `,
})
