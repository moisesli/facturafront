<template>
  <div>

    <div class="container pt-5 ">

      <div class="row ">
        <div class="col-6 mx-auto">

          <b-breadcrumb :items="items"></b-breadcrumb>

          <!-- Card -->
          <b-card header="Entrar al Sistema">
            <b-card-text>

              <!-- Email -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="input-small" class="col-form-label">Email</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input type="text" placeholder="elnaufrago@gmail.com" value='demo@gmail.com'></b-form-input>
                </b-col>
              </b-row>

              <!-- Contrasenia -->
              <b-row class="my-3">
                <b-col sm="3">
                  <label for="input-small" class="col-form-label">Contrasenia</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input type="password" value="123456789" placeholder="*************"></b-form-input>
                </b-col>
              </b-row>

              <b-col>
                <b-button type="submit" variant="primary" class="offset-3 mr-2" @click="login">
                  <font-awesome-icon icon="user" /> Entrar
                </b-button>
                <b-button type="submit" variant="danger" to="/">Cancelar</b-button>
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
  import store from '../../store'
  const axios = require('axios').default;
  export default {
    data(){
      return {
        items: [
          {
            text: 'Inicio',
            to: '/'
          },
          {
            text: 'Login',
            active: true
          }
        ]
      }
    },    
    components: {
      appbar: AppBar
    },
    methods: {
      login: function(){
        axios.get('backend/login.json').then(res => {
          if (!!res.data.login == true){
            store.commit('logearUsuario')
            console.log(store.state.usuario)            
          }          
        })
        // console.log('login')
      }
    }
  }
</script>