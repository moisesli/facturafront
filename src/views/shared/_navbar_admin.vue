<template>
  <!-- AppBar-->
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">

      <b-navbar-brand to="/admin">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        Admin
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"><font-awesome-icon icon="home" /> Inicio</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/"><font-awesome-icon icon="calendar" /> Web</b-nav-item>
        <b-nav-item-dropdown text="demo@gmail.com" right>
          <b-dropdown-item @click="logout" href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div> <!-- End AppBar-->
</template>

<script>
  import store from '../../store'
  // import router from "../../router";
  export default {
    data(){
      return{

      }
    },
    methods: {
      logout: function () {
        store.commit('logoutUsuario');
        this.$router.push('/')
      }
    },
    computed: {
      usuario: function () {
        return store.state.usuario;
      }
    }

  }
</script>