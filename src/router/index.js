import Vue from 'vue'
import VueRouter from 'vue-router'
import Note from '../views/note'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Note
  },
]

const router = new VueRouter({
  mode: 'history',
  base:  window.__POWERED_BY_QIANKUN__ ? '/vue-blog/' : process.env.BASE_URL,
  routes
})

export default router
