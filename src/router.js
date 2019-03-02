import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'
import AddStudent from '@/views/AddStudent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        }, {
          path: 'addStudent',
          name: 'AddStudent',
          component: AddStudent
        }
      ]
    }
  ]
})
