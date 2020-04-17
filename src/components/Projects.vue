<template>
    <div class="project-fontstyling">
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
                        <v-card flat color="transparent">
                            <h1 class="project-title">{{coinsumption.title}}</h1>
                            <div class="project-title-underline"></div>
                            <div v-for="(tech, index) in coinsumption.tech" :key="index" class="tech-div">
                                <p>{{tech}}</p>
                            </div>
                            <v-card-text class="project-description">{{coinsumption.description}}</v-card-text>
                            <v-btn large class="project-button ma-4 mt-8 mr-8" outlined href="https://coinsumption.herokuapp.com/" target="_blank">Visit website</v-btn>
                            <v-btn large class="project-button ma-4 mt-8 ml-8" outlined href="https://github.com/NicholasRoy96/coinsumption_app" target="_blank">View code</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="10" md="6" align-self="center">
                        <v-card flat>
                                <v-img class="image" v-lazy="coinsumption.mainImage" />                      
                        </v-card>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mb-12">
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
                                            v-lazy="screenshot.url"
                                        >
                                        </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>   
            </v-container>



    <!-- BLOGIFY -->
        <v-container>

        <!-- MD + -->
            <v-row justify="center" class="d-none d-md-flex mt-12">
                <v-col cols="12" sm="10" md="6" align-self="center"> 
                    <v-card flat>
                        <v-img class="image" v-lazy="blogify.mainImage" />
                    </v-card>
                </v-col>
                <v-col cols="10" md="6">
                    <v-card flat color="transparent">
                        <h1 class="project-title">{{blogify.title}}</h1>
                        <div class="project-title-underline"></div>
                        <div v-for="(tech, index) in blogify.tech" :key="index" class="tech-div">
                            <p>{{tech}}</p>
                        </div>
                        <v-card-text class="project-description">{{blogify.description}}</v-card-text>
                        <v-btn large class="project-button ma-4 mt-8" outlined href="https://nicholasroy96.github.io/blogify/" target="_blank">Visit website</v-btn>
                        <v-btn large class="project-button ma-4 mt-8 ml-8" outlined href="https://github.com/NicholasRoy96/blogify" target="_blank">View code</v-btn>
                    </v-card>
                </v-col>
            </v-row>

            <!-- SM - -->
            <v-row justify="center" class="d-md-none mt-6">
                <v-col cols="10" md="6" align-self="center">
                    <v-card flat color="transparent">
                        <h1 class="project-title">{{blogify.title}}</h1>
                        <div class="project-title-underline"></div>
                        <div v-for="(tech, index) in blogify.tech" :key="index" class="tech-div">
                            <p>{{tech}}</p>
                        </div>
                        <v-card-text class="project-description">{{blogify.description}}</v-card-text>
                        <v-btn large class="project-button ma-4 mt-8" outlined href="https://nicholasroy96.github.io/blogify/" target="_blank">Visit website</v-btn>
                        <v-btn large class="project-button ma-4 mt-8 ml-8" outlined href="https://github.com/NicholasRoy96/blogify" target="_blank">View code</v-btn>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="10" md="6"> 
                    <v-card flat>
                        <v-img class="image" v-lazy="blogify.mainImage" />
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="mb-12">
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col
                            v-for="(screenshot, index) in blogify.screenshots"
                            :key="index"
                            class="d-flex child-flex"
                            cols="12"
                            sm="10"
                            md="6"
                        >
                            <v-card flat class="d-flex">
                                    <v-img
                                        class="image"
                                        v-lazy="screenshot.url"
                                    >
                                    </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>   
        </v-container>

    <!-- MARK BAILEY COACHING -->
        <div>
            <v-container>
                <v-row justify="center" class="mt-6 mt-md-12">
                    <v-col cols="10" md="6">
                        <v-card flat color="transparent">
                            <h1 class="project-title">{{baileyCoaching.title}}</h1>
                            <div class="project-title-underline"></div>
                            <div v-for="(tech, index) in baileyCoaching.tech" :key="index" class="tech-div">
                                <p>{{tech}}</p>
                            </div>
                            <v-card-text class="project-description">{{baileyCoaching.description}}</v-card-text>
                            <v-btn large class="project-button ma-4 mt-8 mr-8" outlined href="http://markbaileycoaching.co.uk/" target="_blank">Visit website</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="10" md="6" align-self="center">
                        <v-card flat>
                            <v-img class="image" v-lazy="baileyCoaching.mainImage" />
                        </v-card>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mb-12">
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
                                            v-lazy="screenshot.url"
                                        >
                                        </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>   
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            coinsumption: {title: "COINSUMPTION", tech: ["Vue.js", "Vuetify", "HTML", "CSS"],description: "Developed as a personal project, coinsumption is a currency exchange application that utilises live market rates fetched from an open API. Built using Vue.js and Vuetify, Coinsumption is a highly scalable application.", mainImage: require("@/assets/CSHomePageScreenshot.png"), screenshots: [
                { url: require('@/assets/CSExchangeScreenshot.png') },
                { url: require('@/assets/CSExchangeTableScreenshot.png') }
            ]},
            baileyCoaching: {title: "MARK BAILEY COACHING", tech: ["Wordpress", "CSS"], description: "As a freelance project, I was asked to create a business website for personal training business. The brief was simple: a colour scheme of white, purple, and black, and the site must be built using a CMS. After several client meetings and feasibility studies, the end result is a stylish, responsive WordPress site.", mainImage: require("@/assets/MBHomepageScreenshot.png"), screenshots: [
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBTestimonialModalScreenshot.png') },
            ]},
            blogify: {title: "BLOGIFY", tech: ["HTML", "CSS", "Boostrap", "Vanilla JS"],description: "While front-end frameworks are the future of web development, it is important to be well-versed in the fundamentals. I challenged myself to create a website using the basic building-blocks of HTML, CSS, some Bootstrap, and vanilla JavaScript. The result is a lightweight yet responsive blog website template, complete with filtering functionality.", mainImage: require("@/assets/BLOGHomepageScreenshot.png"), screenshots: [
                { url: require('@/assets/BLOGCardScreenshot.png')},
                { url: require('@/assets/BLOGFooterScreenshot.png')}

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
.project-title {
    color: #455a64;
    padding: 16px;
    padding-bottom: 4px;
    font-weight: 900;
}
.project-title-underline {
    width: 80px;
    height: 2px;
    background-color: #455a64;
    margin-left: 16px;
    margin-bottom: 12px;
}
.tech-div {
    background-color: #7fa6ad;
    display: inline-block;
    height: 30px;
    border-radius: 17px;
    padding: 4px 8px 4px 8px;
    margin-left: 16px;
    text-align: center;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
}
.project-description {
    font-size: 1em;
    margin-top: 5px;
}
.project-technologies-title {
    color: #7a7976;
    font-weight: 800;
    font-size: 1.4em;
}
.project-technologies {
    font-size: 1.4em;
    color: #5d91a8;
    margin-left: 8px;
    font-weight: 500;
}
.project-button {
    background-color: white;
    color: #5d91a8;
    
}
.project-button:hover {
    color: white;
    background-color: #5d91a8;
}
/* MEDIA QUERIES */

/* SM */
@media (max-width: 960px) {
    .image {
        border: 1px solid lightgrey;
    }
}
</style>