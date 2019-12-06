<template>
  <!-- AppBar-->
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">

      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
        Facturacion Electronica
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="login">Login</b-nav-item>
          <b-nav-item to="registro">Registro</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> <!-- End AppBar-->
</template>