<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="blue-grey darken-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Nicholas Roy</strong>
      </v-col>
      <v-col
        class="blue-grey darken-2 py-4 text-center white--text"
        cols="12"
      >
      <v-btn
        v-for="link in footerLinks"
        :key="link"
        color="white"
        text
        rounded
      >
        {{ link }}
      </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      footerLinks: [
        'LinkedIn',
        'GitHub',
        'Codewars',
      ],
    }),
  }
</script>

<style scoped>

</style>