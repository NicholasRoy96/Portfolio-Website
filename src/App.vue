<template>
  <v-app>
    <v-parallax src="./assets/background.jpg" height="950">
    <Navbar/>
    </v-parallax>
    <v-content>
      <About />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import About from './components/About'

export default {
  name: 'App',

  components: {
    Navbar,
    About
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>