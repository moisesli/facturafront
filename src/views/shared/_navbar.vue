<template>
  <!-- AppBar-->
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">

      <b-navbar-brand to="/">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        Facturacion Electronica
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"><font-awesome-icon icon="home" /> Inicio</b-nav-item>
          <b-nav-item to="precios"><font-awesome-icon icon="dollar-sign" /> Precios</b-nav-item>
          <b-nav-item to="documentacion"><font-awesome-icon icon="book" /> Documentacion</b-nav-item>
          <b-nav-item to="acerca-de"><font-awesome-icon icon="address-card" /> Quienes Somos?</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown v-if="usuario==true" text="demo@gmail.com" right>
          <b-dropdown-item @click="logout" href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item v-if="usuario==false" to="login"><font-awesome-icon icon="user" /> Login</b-nav-item>
        <b-nav-item v-if="usuario==false" to="registro"><font-awesome-icon icon="lock-open" /> Registro</b-nav-item>


      </b-navbar-nav>
    </b-navbar>
  </div> <!-- End AppBar-->
</template>

<script>
  import store from '../../store'
  export default {
    data(){
      return{

      }
    },
    methods: {
      logout: function () {
        store.commit('logoutUsuario');
      }
    },
    computed: {
      usuario: function () {
        return store.state.usuario;
      }
    }

  }
</script>