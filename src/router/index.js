import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMain from '@/views/PageMain.vue'
import PageMenu from '@/views/PageMenu.vue'
import PageHeader from '@/views/PageHeader.vue'
import PageFooter from '@/views/PageFooter.vue'
Vue.use(VueRouter)

const routes = [
{

  path: `/`,

  component: PageMain

},

{

  path: `/menu`,

  component: PageMenu


},

{

  path: `/`,

  component: PageHeader
},

{

  path: `/`,

  component: PageFooter
}


]

const router = new VueRouter({
  routes
})

export default router
