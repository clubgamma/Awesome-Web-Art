import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import frontFace from '@/components/front-face'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'frontFace',
      component: frontFace
    }
  ]
})
