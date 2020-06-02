import {
  Bell,
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Flag,
  Info,
  MapMarked,
  Minus,
  Plus,
  Search,
  Times,
} from '../../../icons'

export default () => ({
  components: {
    Bell,
    CalendarIcon,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Flag,
    Info,
    MapMarked,
    Minus,
    Plus,
    Search,
    Times,
  },
  template: `
    <div class="flex items-center p-6">
      <Bell class="h-5 w-5 mr-3" />
      <CalendarIcon class="h-5 w-5 mr-3" />
      <ChevronDown class="h-5 w-5 mr-3" />
      <ChevronLeft class="h-5 w-5 mr-3" />
      <ChevronRight class="h-5 w-5 mr-3" />
      <ChevronUp class="h-5 w-5 mr-3" />
      <Flag class="h-5 w-5 mr-3" />
      <Info class="h-5 w-5 mr-3" />
      <MapMarked class="h-5 w-5 mr-3" />
      <Minus class="h-5 w-5 mr-3" />
      <Plus class="h-5 w-5 mr-3" />
      <Search class="h-5 w-5 mr-3" />
      <Times class="h-5 w-5 mr-3" />
    </div>
  `,
})
