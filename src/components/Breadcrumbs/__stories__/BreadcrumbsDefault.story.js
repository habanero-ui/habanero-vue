import Button from '../../Button/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumbs, Button },
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumbs>
        <Button size="small" variant="text" text="Alpha" />
        <Button size="small" variant="text" text="Bravo" />
        <Button size="small" variant="text" text="Charlie" />
        <Button size="small" variant="text" text="Delta" />
      </Breadcrumbs>
    </div>
  `,
})
