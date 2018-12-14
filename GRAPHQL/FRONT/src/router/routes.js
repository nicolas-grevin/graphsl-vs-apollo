import Home from '@/views/Home'
import AstronautList from '@/views/Astronaut/List'
import AstronautItem from '@/views/Astronaut/Item'
import AstronautNew from '@/views/Astronaut/New'
import AstronautEdit from '@/views/Astronaut/Edit'
import AstronautDelete from '@/views/Astronaut/Delete'
import PlanetList from '@/views/Planet/List'
import PlanetItem from '@/views/Planet/Item'
import PlanetNew from '@/views/Planet/New'
import PlanetEdit from '@/views/Planet/Edit'
import PlanetDelete from '@/views/Planet/Delete'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    enableToNav: true
  },
  {
    path: '/astronauts',
    name: 'astronautList',
    component: AstronautList,
    enableToNav: true
  },
  {
    path: '/astronauts/:id',
    name: 'astronautItem',
    component: AstronautItem,
    enableToNav: false
  },
  {
    path: '/new-astronaut',
    name: 'astronautNew',
    component: AstronautNew,
    enableToNav: false
  },
  {
    path: '/edit-astronaut/:id',
    name: 'astronautEdit',
    component: AstronautEdit,
    enableToNav: false,
  },
  {
    path: '/delete-astronaut/:id',
    name: 'astronautDelete',
    component: AstronautDelete,
    enableToNav: false
  },
  {
    path: '/planets',
    name: 'planetsList',
    component: PlanetList,
    enableToNav: true
  },
  {
    path: '/planet/:id',
    name: 'planetItem',
    component: PlanetItem,
    enableToNav: false
  },
  {
    path: '/new-planet',
    name: 'planetNew',
    component: PlanetNew,
    enableToNav: false
  },
  {
    path: '/edit-planet/:id',
    name: 'planetEdit',
    component: PlanetEdit,
    enableToNav: false,
  },
  {
    path: '/delete-planet/:id',
    name: 'planetDelete',
    component: PlanetDelete,
    enableToNav: false
  }
]
