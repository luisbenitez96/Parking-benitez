import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import BubbleChart from '@material-ui/icons/BubbleChart'
import LocationOn from '@material-ui/icons/LocationOn'

import UserPage from './views/User'
import BalancePage from './views/Balance'
import VehiculosPage from './views/Vehiculos'
import DashboardPage from './views/Dashboard/Dashboard.js'

const dashboardRoutes = [
  {
    path: '/inicio',
    name: 'Inicio',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    icon: Person,
    component: UserPage,
    layout: '/admin'
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    icon: LocationOn,
    component: VehiculosPage,
    layout: '/admin'
  },
  {
    path: '/balances',
    name: 'Balances',
    icon: BubbleChart,
    component: BalancePage,
    layout: '/admin'
  }
]

export default dashboardRoutes
