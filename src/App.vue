<template>
  <v-app>
    <Homepage />
    <Navbar />
    <v-content class="pt-0">
      <Projects id="frontend"/>
      <BackendProjects id="backend"/>
      <Contact id="contact"/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackendProjects from './components/BackendProjects'
import Footer from './components/Footer'


export default {
  name: 'App',

  components: {
    Homepage,
    Navbar,
    Projects,
    BackendProjects,
    Contact,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.heading {
    font-family: raleway-bold, sans-serif;
    font-size: 30pt;
    color: #444649;
}

.heading-underline {
    background: #444649;
    height: 4px;
    width: 70px;
    margin: 10px auto;
}
</style>