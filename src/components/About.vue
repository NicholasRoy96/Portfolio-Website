<template>
    <div class="background about-fontsyling">
        <v-container class="background">
            <v-row class="mt-12 mb-12">
                <v-col cols="12">
                    <h1 align="center" class="heading">ABOUT</h1>
                    <div class="heading-underline"></div>
                </v-col>
            </v-row>

            <!-- TODO - how to justify avatar CENTER?! -->

            <v-row align-content="center" justify="center">
                <v-col cols="6" lg="4" md="5">
                    <v-responsive :aspect-ratio="1/1">
                        <v-avatar width="100%" height="100%">
                            <v-img src="../assets/mugshot.jpg"></v-img>
                        </v-avatar>
                    </v-responsive>
                </v-col>

                <v-col cols="10" lg="8" md="7" align-self="center">
                    <v-card shaped max-width="700" class="ml-12" color="#f5f5f5">
                        <v-card-subtitle> I am a full stack web developer with experience working with Node.js, MongoDB, Vue,js, and WordPress.
                        </v-card-subtitle>
                        <v-card-subtitle>I’m always working on a personal project or two!
                        </v-card-subtitle>
                    </v-card>
                </v-col >   
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            skills: [
                {name: "html/CSS"},
                {name: "Javascript"},
                {name: "Node.js"},
                {name: "Express"},
                {name: "Vue.js"},
                {name: "MongoDB/MySQL"},
                {name: "Wordpress"},
                {name: "Git"},
                {name: "Mocha & Chai.js"}
            ]
        }
    }
}
</script>

<style scoped>

.about-fontstyling {
    color: #444649;
    font-family: raleway, sans-serif;
}

.background {
    background: #f5f5f5;
}

.profile {
    margin: auto;
}

.skill-card {
  display: flex;
  justify-content: center;
}
</style>