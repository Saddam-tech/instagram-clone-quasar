<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10">
      <q-toolbar>

          <q-footer class="bg-white" bordered>
            <q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent">
              <q-route-tab to="/" name="home" icon="mail" />
              <q-route-tab to="/camera" name="home" icon="alarm" /> 
            </q-tabs>
          </q-footer>

        <q-toolbar-title>
          Instagram
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

   

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  data () {
    return {

    }
  }
})
</script>


<style lang="sass">
.q-toolbar__title
  text-align: center
.q-footer
  .q-tab__icon
    font-size: 30px

</style>