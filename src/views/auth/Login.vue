<template>
  <div>

    <div class="container pt-5 ">
      <div class="row ">
        <div class="col-6 mx-auto">

          <!-- Card -->
          <b-card header="Entrar al Sistema">
            <b-card-text>

              <!-- Email -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="input-small" class="col-form-label">Email</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input :type="text" placeholder="elnaufrago@gmail.com"></b-form-input>
                </b-col>
              </b-row>

              <!-- Contrasenia -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="input-small" class="col-form-label">Contrasenia</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input :type="password" placeholder="*************"></b-form-input>
                </b-col>
              </b-row>

              <b-col>
                <b-button type="submit" variant="primary" class="offset-3 mr-2"><font-awesome-icon icon="user" /> Entrar</b-button>
              </b-col>




            </b-card-text>
          </b-card>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import AppBar from '../shared/_navbar'
  export default {
    components: {
      appbar: AppBar
    }
  }
</script>