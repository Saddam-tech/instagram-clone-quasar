<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10">
      <q-toolbar>
        <q-btn
          to="/camera"
          flat
          round
          dense
          color="primary"
          icon="camera"
          size="18px"
        />

        <q-toolbar-title> Instagram </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white" bordered>
      <q-tabs class="text-grey-10" indicator-color="transparent">
        <q-route-tab to="/" name="home" icon="home" />
        <q-route-tab to="/camera" name="camera" icon="camera" />
      </q-tabs>
    </q-footer>
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {};
  },
});
</script>


<style lang="sass">
.q-toolbar__title
  text-align: center
.q-footer
  .q-tab__icon
    font-size: 30px
</style>