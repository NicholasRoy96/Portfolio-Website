<template>
    <div>
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
                    <div>
                        <p>I am a full stack web developer with experience working with Node.js, MongoDB, Vue,js, and WordPress.
                        </p>
                    </div>
                    <div>
                        <p>I’m always working on a personal project or two!
                        </p>
                    </div>
                </v-col >   
            </v-row>

            <v-row justify="center" class="mt-12 mb-12">
                <v-col cols="8">
                    <v-row justify="center"> 
                        <v-col cols="12" align-self="center">
                            <v-container fluid>
                                <v-row>
                                    <v-col
                                    v-for="skill in skills"
                                    :key="skill"
                                    class="d-flex child-flex"
                                    lg="4"
                                    md="4"
                                    sm="6"
                                    align-self="center"
                                    >
                                        <v-card flat tile class="d-flex skill-card">
                                            <v-row>
                                                <v-col cols="3" align-self="center">
                                                    <template>
                                                        <v-icon>mdi-domain</v-icon>
                                                    </template>
                                                </v-col>
                                                <v-col cols="9">
                                                    <v-card-subtitle>{{ skill.name }}</v-card-subtitle>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-col>
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
.background {
    background:white;
    color: #444649;
    font-family: raleway, sans-serif;
}

.profile {
    margin: auto;
}

.skill-card {
  display: flex;
  justify-content: center;
}
</style>