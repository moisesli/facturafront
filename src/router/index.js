// Base
import Vue from 'vue'
import VueRouter from 'vue-router'

// Componentes
import Home from '../views/web/Home'
import Login from '../views/auth/Login'
import Registro from '../views/auth/Registro'
import Admin from '../views/documentos/Admin'

// Web
import Precios from '../views/web/Princing'
import Doc from '../views/web/Doc'
import About from '../views/web/About'

// Store
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/precios',
    name: 'precios',
    component: Precios,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/documentacion',
    name: 'doc',
    component: Doc,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/acerca-de',
    name: 'about',
    component: About,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
    meta: {
      nologeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/admin',
    name: 'Addmin',
    component: Admin,
    meta: {
      logeado: true,
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#007fe2'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
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
  let usuario = store.state.usuario;
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
  console.log(usuario)

})

export default router
