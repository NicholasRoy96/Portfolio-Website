<template>
    <div>
        <v-app-bar
      app
      class="transparent"
      flat
      height="100"
      absolute
      hide-on-scroll
    >
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
    name: 'Navbar',
    data() {
        return {
            pageTop: true
        }
    },
    // computed: {
    //      navbarClass() {
    //         if (window.scrollY == 0) this.class = "transparent"
    //         return this.class = "black"
    //                 // trying to write a function to determine if page scroll is at top or elsewhere on page.
    //                 // then can attach conditional classes to navbar - if pageTop, class = transparent, if pageScrollled, class = black
    //      },
    // }
}   
</script>

<style scoped>
</style>