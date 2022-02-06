import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'

export const rotues = [
  {path: '/', component: Home},
  {path: '*', component: NotFound}
]