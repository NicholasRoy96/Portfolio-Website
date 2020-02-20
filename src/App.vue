<template>
  <v-app>
    <v-parallax src="./assets/background.jpg" height="950">
    </v-parallax>
    <Navbar/>
    <v-content class="pt-0">
      <About />
      <Projects />
      <Contact />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default {
  name: 'App',

  components: {
    Navbar,
    About,
    Projects,
    Footer,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>
// TODO: how to remove padding from v-content?

<style>
.heading {
    font-family: raleway-bold, sans-serif;
    font-size: 30pt;
}

.heading-underline {
    background: #444649;
    height: 4px;
    width: 70px;
    margin: 10px auto;
}
</style>