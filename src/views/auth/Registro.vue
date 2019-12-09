<template>
  <div>

    <!-- Card -->
    <div class="container pt-5 ">
      
      <div class="row">
        <div class="col-6 mx-auto">
          <!-- Breacrumb -->
          <b-breadcrumb :items="items"></b-breadcrumb>
          <b-card header="Registro de Empresa y Usuario">

            

            <!-- RUC -->
            <b-row class="my-3">
              <b-col sm="3">
                <label for="input-small" class="col-form-label">RUC</label>
              </b-col>
              <b-col sm="9">
                <b-form-input type="text" placeholder="10425162531"></b-form-input>
              </b-col>
            </b-row>

            <!-- Razon Social -->
            <b-row class="my-3">
              <b-col sm="3">
                <label for="input-small" class="col-form-label">Razon Social</label>
              </b-col>
              <b-col sm="9">
                <b-form-input type="text" placeholder="Nombre de tu Empresa"></b-form-input>
              </b-col>
            </b-row>

            <!-- Email Usuario -->
            <b-row class="my-3">
              <b-col sm="3">
                <label for="input-small" class="col-form-label">Tu Email</label>
              </b-col>
              <b-col sm="9">
                <b-form-input type="text" placeholder="elnaufrago2009@gmail.com"></b-form-input>
              </b-col>
            </b-row>

            <!-- Contrasenia -->
            <b-row class="my-3">
              <b-col sm="3">
                <label for="input-small" class="col-form-label">Contrasenia</label>
              </b-col>
              <b-col sm="9">
                <b-form-input type="password" placeholder="**********"></b-form-input>
              </b-col>
            </b-row>

            <b-col>
              <b-button type="submit" variant="primary" class="offset-3 mr-2"><font-awesome-icon icon="user" /> Registrar</b-button>
              <b-button type="submit" variant="danger" to="/">Cancelar</b-button>
            </b-col>
            

          </b-card>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Appbar from '../shared/_navbar'

  export default {
    data(){
      return {
        items: [
          {
            text: 'Inicio',
            to: '/'
          },
          {
            text: 'Registro',
            active: true
          }
        ]
      }
    },
    components: {
      'appbar': Appbar
    }
  }
</script>