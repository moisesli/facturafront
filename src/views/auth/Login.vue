<template>
  <div>

    <!-- AppBar-->
    <appbar/>

    <!-- Card -->
    <div class="container pt-5 ">
      <div class="row">
        <div class="col-9 mx-auto">
          <b-card header="Registro de Empresa">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import AppBar from './_navbar'
  export default {
    components: {
      appbar: AppBar
    }
  }
</script>