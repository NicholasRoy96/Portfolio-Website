<template>
    <div>
        <v-app-bar
        app
        class="transparent d-none d-sm-block"
        flat
        height="100"
        absolute
        hide-on-scroll
        >
        <v-spacer></v-spacer>
            <v-btn
            text
            class="nav-button"
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
            class="nav-button"
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
            outlined
            class="nav-button contact"
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


        <!-- Hamburger menu on sm - -->
        <Slide class="d-sm-none" :closeOnNavigation="true">
            <a
            class="nav-button-hamburger"
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
                <v-icon class="nav-icon-hamburger">mdi-code-tags</v-icon>
                <span>Frontend</span>
            </a>
            <a
            class="nav-button-hamburger"
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
                <v-icon class="nav-icon-hamburger">mdi-cog-outline</v-icon>
                <span>Backend</span>
            </a>
            <a class="nav-button-hamburger bottom-button"
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
                <v-icon class="nav-icon-hamburger">mdi-email-outline</v-icon>
                <span>Contact</span>
            </a>
        </Slide>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    name: 'Navbar',
    components: {
        Slide
    },
    data() {
        return {
            pageTop: true
        }
    },
}   
</script>

<style>
.bm-burger-bars {
    background-color: white;
}
.bm-menu {
    background-color: #455a64;
    border-right: 1px solid darkgrey;
}
.bm-item-list > * > span:hover {
    margin-left: 10px;
    font-weight: 700;
    color: grey;
}
</style>

<style scoped>
.nav-button {
    color: white;
    font-family: raleway, sans-serif;
}
.nav-button.contact {
    border: 3px solid black;
}
.nav-button:hover {
    color: #a5dde8;
}
.nav-icon-hamburger {
    color: white;
    margin-right: 10px;
}
.nav-button-hamburger {
    font-family: raleway, sans-serif;
    border-bottom: 1px solid grey;
}
.bottom-button {
    border-bottom: none;
}
</style>