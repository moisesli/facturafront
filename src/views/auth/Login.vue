<template>
  <div>

    <div class="container pt-5 ">
      <div class="row">
        <div class="col-9 mx-auto">

          <!-- Card -->
          <b-card header="Entrar al Sistema">
            <b-card-text>

              <b-row class="mx-auto">
                <b-col class="col-2">
                  <label>Correo:</label>
                </b-col>
                <b-col class="col-5">
                  <b-form-input id="input-small" placeholder="elnaufrago@gmail.com"></b-form-input>
                </b-col>
              </b-row>

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