<template>
    <div class="project-fontstyling">
        <div class="background">
            <v-container>
                <v-row class="mt-12 mb-12">
                    <v-col cols="12">
                        <h1 align="center" class="heading">FRONT-END PROJECTS</h1>
                        <div class="heading-underline"></div>
                    </v-col>
                </v-row>

    <!-- COINSUMPTION-->
                <v-row justify="center">
                    <v-col cols="10" md="6">
                        <h2 class="project-name">{{coinsumption.title}}</h2>
                        <p>{{coinsumption.description}}</p>
                        <v-row justify="center">
                            <v-icon size="40" class="pa-4 pr-8" color="#00a1a7">mdi-vuejs</v-icon>
                            <v-icon size="40" class="pa-4 pl-8" color="#00a1a7">mdi-vuetify</v-icon>
                        </v-row>
                        <v-row justify="center">
                            <v-btn class="project-button ma-4 mr-8" outlined>Visit website</v-btn>
                            <v-btn class="project-button ma-4 ml-8" outlined>View code</v-btn>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="10" md="6" >
                        <v-card flat>
                            <v-img class="image" :src="coinsumption.mainImage" />
                        </v-card>
                    </v-col>
                    
                </v-row>

                <!-- <v-row justify="center">
                    <v-col cols="12">
                        <v-row justify="center">
                            <v-col
                                v-for="(screenshot, index) in coinsumption.screenshots"
                                :key="index"
                                class="d-flex child-flex"
                                cols="12"
                                sm="10"
                                md="6"
                            >
                                <v-card flat class="d-flex">
                                        <v-img
                                            class="image"
                                            :src="screenshot.url"
                                        >
                                        </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row> -->
            </v-container>
        </div>

    <!-- MARK BAILEY COACHING -->
        <v-container>

            <!-- MD + -->
            <v-row justify="center" class="d-none d-md-flex">
                <v-col cols="12" sm="10" md="6"> 
                    <v-card flat>
                        <v-img class="image" :src="baileyCoaching.mainImage" />
                    </v-card>
                </v-col>
                <v-col cols="10" md="6">
                    <h2 class="project-name">{{baileyCoaching.title}}</h2>
                    <p>{{baileyCoaching.description}}</p>
                </v-col>
            </v-row>

            <!-- SM - -->
            <v-row justify="center" class="d-md-none">
                <v-col cols="10" md="6">
                    <h2 class="project-name">{{baileyCoaching.title}}</h2>
                    <p>{{baileyCoaching.description}}</p>
                </v-col>
                <v-col cols="12" sm="10" md="6"> 
                    <v-card flat>
                        <v-img class="image" :src="baileyCoaching.mainImage" />
                    </v-card>
                </v-col>
            </v-row>

            <!-- <v-row justify="center">
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col
                            v-for="(screenshot, index) in baileyCoaching.screenshots"
                            :key="index"
                            class="d-flex child-flex"
                            cols="12"
                            sm="10"
                            md="6"
                        >
                            <v-card flat class="d-flex">
                                    <v-img
                                        class="image"
                                        :src="screenshot.url"
                                    >
                                    </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>    -->
        </v-container>

    <!-- BLOGIFY -->
        <div class="background">
            <v-container>
                <v-row justify="center">
                        <v-col cols="10" lg="6" md="6">
                            <h2 class="project-name">{{blogify.title}}</h2>
                            <p>{{blogify.description}}</p>
                        </v-col>
                        <v-col cols="12" sm="10" md="6"> 
                            <v-card flat>
                                <v-img class="image" src="../assets/BLOGHomepageScreenshot.png" />
                            </v-card>
                        </v-col>
                    </v-row>

                    <!-- <v-row justify="center">
                        <v-col cols="12">
                            <v-row justify="center">
                                <v-col
                                    v-for="(screenshot, index) in baileyCoaching.screenshots"
                                    :key="index"
                                    class="d-flex child-flex"
                                    cols="12"
                                    sm="10"
                                    md="6"
                                >
                                    <v-card flat class="d-flex">
                                            <v-img
                                                class="image"
                                                :src="screenshot.url"
                                            >
                                            </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>    -->
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            coinsumption: {title: "coinsumption", description: "Developed as a personal project, coinsumption is a currency exchange application that utilises live market rates fetched from an open API. ", mainImage: require("@/assets/CSHomePageScreenshot.png"), screenshots: [
                { url: require('@/assets/CSExchangeScreenshot.png') },
                { url: require('@/assets/CSExchangeTableScreenshot.png') }
            ]},
            baileyCoaching: {title: "Mark Bailey Coaching", description: "As a freelance project, I was asked to create a business website for Personal Training business. The brief was simple: a colour scheme of white, purple, and black, and the site must be builtusing a CMS (to be maintainable by the business). After several client meeting, feasibility studies, setup of hosting, domain name, and professional, the end result is a stylish, responsive WordPress site.", mainImage: require("@/assets/MBHomepageScreenshot2.png"), screenshots: [
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBTestimonialModalScreenshot.png') }
            ]},
            blogify: {title: "Blogify", description: "While front-end frameworks are the future of web development, it is important to be well-versed in the fundamentals. I challenged myself to create a webiste using the basic building-blocks of HTML, CSS, some Bootstrap, and vanilla JavaScript. The result is a lightweight yet responsive blog website template, complete with filtering functionality.", mainImage: require("@/assets/MBHomepageScreenshot2.png"), screenshots: [
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBTestimonialModalScreenshot.png') }
            ]},
        }
    }
}
</script>

<style scoped>
.project-fontstyling {
    color: #444649;
    font-family: raleway, sans-serif;
}
.project-name {
    text-align: center;
    margin-bottom: 15px;
}
.background {
    background: #f5f5f5;
}
.project-button {
    color: #00a1a7;
}
.project-button:hover {
    color: white;
    background-color: #00a1a7;
}
/* MEDIA QUERIES */

/* SM */
@media (max-width: 960px) {
    .image {
        border: 1px solid lightgrey;
    }
}
</style>