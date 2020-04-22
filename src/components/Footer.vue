<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-col class="footer-links py-4 text-center white--text" cols="12">
        <v-btn
          v-for="(link, index) in footerLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          color="white"
          class="ma-4 mt-0 mb-0"
          icon
          rounded
        >
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <a
          class="name-link"
          v-scroll-to="{
            el: '#homepage',
            duration: 1000,
            easing: 'linear',
            offset: 0,
            force: true,
            cancelable: true,
            x: false,
            y: true
          }"
        >
          <strong>Nicholas Roy</strong>
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerLinks: {
      linkedIn: {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/nicholas-roy-b1078a19a/"
      },
      github: { icon: "mdi-github", url: "https://github.com/NicholasRoy96" }
    }
  })
};
</script>

<style>
footer {
  background-color: #455a64 !important;
}
.name-link {
  color: white !important;
}
</style>