<template>
  <div>
    <!-- Template no logeado -->
    <template v-if="plantilla == 'nologeado'">
      <appbar />
      <div class="container pt-2">
        <router-view/>
        <vue-progress-bar></vue-progress-bar>
      </div>
    </template>

    <!-- Template Logeado -->
    <template v-if="plantilla == 'logeado'">
      <router-view/>
      <vue-progress-bar></vue-progress-bar>
    </template>
  </div>
</template>

<script>
import store from './store'
import Appbar from './views/shared/_navbar'
export default {
  components: {
    appbar: Appbar
  },
  computed: {
    plantilla(){
      return store.state.plantilla;
    }
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>
