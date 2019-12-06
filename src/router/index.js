// Base
import Vue from 'vue'
import VueRouter from 'vue-router'

// Componentes
import Home from '../views/home/Home'
import Login from '../views/auth/Login'
import Registro from '../views/auth/Registro'
import Admin from '../views/documentos/Admin'

// Store
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      nologeado: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      nologeado: true
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
    meta: {
      nologeado: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      logeado: true
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  var usuario = store.state.usuario;
  // let usuario = firebase.auth().currentUser;

  let nologeado = to.matched.some(record => record.meta.nologeado);
  let logeado = to.matched.some(record => record.meta.logeado);  

  // console.log(!!usuario)

  if (nologeado == true) {
    // Cualquiera puede tener acceso a la web registrado o no
    store.commit('generaPlantilla','nologeado')
    next()
  }else if (logeado == true && !!usuario == true) {
    // si entra a auth y no esta autenticado puede entrar, si esta autenticado
    // y entra a login no entrara
    store.commit('generaPlantilla','logeado')
    next()
  }else{
    // si no esta autenticado y entra al dashboard se va a login
    next('/login')
  }


})

export default router
