<template>
    <div>
        <v-app-bar
      app
      flat
      class="transparent"
      height="100"
      elevate-on-scroll
    >
        <v-toolbar-title class="white--text">Nicholas Roy</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-btn
                text
                class="white--text"
                x-large
                href="#about"
            >
                About
            </v-btn>
            <v-btn
                text
                class="white--text"
                x-large
            >
                Projects
            </v-btn>
            <v-btn
                text
                class="white--text"
                x-large
            >
                Contact
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
</style>