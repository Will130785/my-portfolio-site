import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../pages/Blog.vue'
import Blogs from '../pages/Blogs.vue'
import CurrentRole from '../pages/CurrentRole.vue'
import ForFun from '../pages/ForFun.vue'
import Freelance from '../pages/Freelance.vue'
import Home from '../pages/home/Home.vue'
import Professional from '../pages/Professional.vue'
import Project from '../pages/Project.vue'
import Contact from '../pages/Contact.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
      },
      {
        path: '/blogs/:id',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/current-role',
        name: 'CurrentRole',
        component: CurrentRole
      },
      {
        path: '/for-fun',
        name: 'ForFun',
        component: ForFun
      },
      {
        path: '/freelance',
        name: 'Freelance',
        component: Freelance
      },
      {
        path: '/professional',
        name: 'Professional',
        component: Professional
      },
      {
        path: '/for-fun/:id',
        name: 'Project',
        component: Project
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      }
    ]
  })
}
