import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About'
import Works from '@/pages/Works'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "nav__link-active",  
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,      
    },
    {
	  path: '/works',
      name: 'Works',
      component: Works,  	
    },
    {
	  path: '/contact',
      name: 'Contact',
      component: Contact,  	
    },

  ]
})
