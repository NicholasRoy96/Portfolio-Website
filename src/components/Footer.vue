<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
    <v-col
    class="footer-links py-4 text-center white--text"
    cols="12"
    >
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
        <v-icon>
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-col>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Nicholas Roy</strong>
      </v-col>
      
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      footerLinks: {
        linkedIn: {icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/nicholas-roy-b1078a19a/'},
        github: {icon: 'mdi-github', url: 'https://github.com/NicholasRoy96'}
      },
    }),
  }
</script>

<style>
footer {
    background-color: #455a64 !important;
}

/* .footer-links {
    background-color: #7193a3 !important;
} */
</style>