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
            v-scroll-to="{
                el: '#frontend',
                duration: 1000,
                easing: 'linear',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: onStart,
                onDone: onDone,
                onCancel: onCancel,
                x: false,
                y: true
            }"
            >
            Frontend
            </v-btn>
            <v-btn
            text
            class="white--text"
            x-large
            v-scroll-to="{
                el: '#backend',
                duration: 1000,
                easing: 'linear',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: onStart,
                onDone: onDone,
                onCancel: onCancel,
                x: false,
                y: true
            }"
            >
            Backend
            </v-btn>
            <v-btn
            text
            class="white--text"
            x-large
            v-scroll-to="{
                el: '#contact',
                duration: 1000,
                easing: 'linear',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: onStart,
                onDone: onDone,
                onCancel: onCancel,
                x: false,
                y: true
            }"
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