<template>
    <div class="project-fontstyling">
        <div class="background">
            <v-container>
                <v-row class="mt-12 mb-12">
                    <v-col cols="12">
                        <h1 align="center" class="heading">PROJECTS</h1>
                        <div class="heading-underline"></div>
                    </v-col>
                </v-row>
                
                <v-spacer></v-spacer>

    <!-- MARK BAILEY COACHING -->

                <v-row justify="center">
                    
                    <v-col cols="10" lg="6" md="6">
                        <h2 class="project-name">Mark Bailey Coaching</h2>
                        <p> Sed molestias dicta ipsa sint! Vero in dignissimos magni delectus nemo provident repellat, quasi iure eius minima eum aliquam, similique, distinctio excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis, neque numquam vel illum voluptates quas eveniet magnam, a eius, expedita quasi cupiditate laboriosam nihil blanditiis hic inventore. Quisquam, eaque?</p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="10"> 
                        <v-card>
                            <v-img src="../assets/MBHomepageScreenshot2.png" />
                        </v-card>
                    </v-col>
                    
                </v-row>

                <v-row justify="center">
                    <v-col cols="12">
                        <v-row justify="center">
                            <v-col
                                v-for="(screenshot, index) in baileyCoachingScreenshots"
                                :key="index"
                                class="d-flex child-flex"
                                cols="12"
                                lg="6"
                                md="6"
                                sm="10"
                            >
                                <v-card flat class="d-flex">
                                        <v-img
                                            :src="screenshot.url"
                                        >
                                        </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
<!-- USER MANAGEMENT APP -->
        <v-container>
            <v-row justify="center">
                    
                    <v-col cols="10" lg="6" md="6">
                        <h2 class="project-name">User Management Application</h2>
                        <p> Sed molestias dicta ipsa sint! Vero in dignissimos magni delectus nemo provident repellat, quasi iure eius minima eum aliquam, similique, distinctio excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis, neque numquam vel illum voluptates quas eveniet magnam, a eius, expedita quasi cupiditate laboriosam nihil blanditiis hic inventore. Quisquam, eaque?</p>
                    </v-col>
                    <v-col cols="12" lg="6" md="6" sm="10"> 
                        <v-card>
                            <v-img src="../assets/background.jpg" />
                        </v-card>
                    </v-col>
                    
                    
                    
                </v-row>

                <v-row justify="center">
                    <v-col cols="12">
                        <v-row justify="center">
                            <v-col
                                v-for="(screenshot, index) in baileyCoachingScreenshots"
                                :key="index"
                                class="d-flex child-flex"
                                cols="12"
                                lg="6"
                                md="6"
                                sm="10"
                            >
                                <v-card flat class="d-flex">
                                        <v-img
                                            :src="screenshot.url"
                                        >
                                        </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            baileyCoachingScreenshots: [
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBTestimonialModalScreenshot.png') },
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBAboutScreenshot.png') }
            ],
            userManagementScreenshots: [
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBTestimonialModalScreenshot.png') },
                { url: require('@/assets/MBAboutScreenshot.png') },
                { url: require('@/assets/MBAboutScreenshot.png') }
            ]
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
</style>