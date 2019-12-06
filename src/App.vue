<template>
  <div>
    <!-- Template no logeado -->
    <template v-if="plantilla == 'nologeado'">
      <router-view/>
    </template>

    <!-- Template Logeado -->
    <template v-if="plantilla == 'logeado'">      
      <router-view/>
    </template>
  </div>
</template>

<script>
import store from './store'
export default {
  computed: {
    plantilla(){
      return store.state.plantilla;
    }
  }
}
</script>

<style lang="scss">
</style>
