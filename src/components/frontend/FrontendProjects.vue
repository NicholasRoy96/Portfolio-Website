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
        <v-col cols="12" sm="10" md="6">
          <Description :project="coinsumption" />
        </v-col>
        <v-col cols="12" sm="10" md="6" align-self="center">
          <MainImage :imageName="coinsumption.mainImage" />
        </v-col>
      </v-row>

      <v-row justify="center" class="mb-0 mb-sm-4">
        <v-col
          v-for="(screenshot, index) in coinsumption.screenshots"
          :key="index"
          class="d-flex child-flex"
          cols="12"
          sm="10"
          md="6"
        >
          <Screenshot :screenshotName="screenshot" />
        </v-col>
      </v-row>
    </v-container>

    <!-- BLOGIFY -->
    <v-container>
      <!-- MD + -->
      <v-row justify="center" class="d-none d-md-flex mt-12">
        <v-col cols="6" align-self="center">
          <MainImage :imageName="blogify.mainImage" />
        </v-col>
        <v-col md="6">
          <Description :project="blogify" />
        </v-col>
      </v-row>

      <!-- SM - -->
      <v-row justify="center" class="d-md-none mt-6">
        <v-col cols="12" sm="10" align-self="center">
          <Description :project="blogify" />
        </v-col>
        <v-col cols="12" sm="10">
          <MainImage :imageName="blogify.mainImage" />
        </v-col>
      </v-row>
      <v-row justify="center" class="mb-0 mb-sm-4">
        <v-col
          v-for="(screenshot, index) in blogify.screenshots"
          :key="index"
          class="d-flex child-flex"
          cols="12"
          sm="10"
          md="6"
        >
          <Screenshot :screenshotName="screenshot" />
        </v-col>
      </v-row>
    </v-container>

    <!-- MARK BAILEY COACHING -->
    <div>
      <v-container>
        <v-row justify="center" class="mt-6 mt-md-12">
          <v-col cols="12" sm="10" md="6">
            <Description :project="baileyCoaching" />
          </v-col>
          <v-col cols="12" sm="10" md="6" align-self="center">
            <MainImage :imageName="baileyCoaching.mainImage" />
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-0 mb-sm-4">
          <v-col
            v-for="(screenshot, index) in baileyCoaching.screenshots"
            :key="index"
            class="d-flex child-flex"
            cols="12"
            sm="10"
            md="6"
          >
            <Screenshot :screenshotName="screenshot" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Description from "./Description";
import MainImage from "./MainImage";
import Screenshot from "./Screenshot";

export default {
  name: "Projects",
  components: {
    Description,
    MainImage,
    Screenshot
  },
  data() {
    return {
      coinsumption: {
        title: "COINSUMPTION",
        tech: ["Vue.js", "Vuetify", "HTML", "CSS"],
        description:
          "Developed as a personal project, coinsumption is a currency exchange application that utilises live market rates fetched from an open API. Built using Vue.js and Vuetify, Coinsumption is a highly scalable application.",
        links: {
          liveLink: "https://coinsumption.herokuapp.com/",
          codeLink: "https://github.com/NicholasRoy96/coinsumption_app"
        },
        mainImage: "CSHomePageScreenshot.png",
        screenshots: [
          "CSExchangeScreenshot.png",
          "CSExchangeTableScreenshot.png"
        ]
      },
      blogify: {
        title: "BLOGIFY",
        tech: ["HTML", "CSS", "Boostrap", "JavaScript"],
        description:
          "While front-end frameworks are the future of web development, it is important to be well-versed in the fundamentals. I challenged myself to create a website using the basic building-blocks of HTML, CSS, some Bootstrap, and vanilla JavaScript. The result is a lightweight yet responsive blog website template, complete with filtering functionality.",
        links: {
          liveLink: "https://nicholasroy96.github.io/blogify/",
          codeLink: "https://github.com/NicholasRoy96/blogify"
        },
        mainImage: "BLOGHomepageScreenshot.png",
        screenshots: ["BLOGCardScreenshot.png", "BLOGFooterScreenshot.png"]
      },
      baileyCoaching: {
        title: "MARK BAILEY COACHING",
        tech: ["WordPress", "CSS"],
        description:
          "As a freelance project, I was asked to create a business website for a personal training business. The brief was simple: a colour scheme of white, purple, and black, and the site must be built using a CMS. After several client meetings and feasibility studies, the end result is a stylish, responsive WordPress site.",
        links: {
          liveLink: "http://markbaileycoaching.co.uk/",
          codeLink: "N/A"
        },
        mainImage: "MBHomepageScreenshot.png",
        screenshots: [
          "MBAboutScreenshot.png",
          "MBTestimonialModalScreenshot.png"
        ]
      }
    };
  }
};
</script>

<style>
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
  font-weight: normal;
  margin-bottom: 10px;
}
.tech-tag {
  padding: 0 2px 6px 2px;
  margin: 0;
}
.project-description {
  font-size: 1em;
  margin-top: 5px;
}
.project-button {
  background-color: white;
  color: #455a64 !important;
  margin: 32px 16px 16px 16px;
}
.project-button:hover {
  color: white !important;
  background-color: #5d91a8;
}

/* MEDIA QUERIES */

/* MD */
@media (max-width: 1264px) {
}

/* SM */
@media (max-width: 960px) {
  .image {
    border: 1px solid lightgrey;
  }
  .project-button {
    padding: 0 10px;
  }
}
/* XS */
@media (max-width: 600px) {
  .v-btn:not(.v-btn--round).v-size--large {
    padding: 0 10px;
  }
  .v-btn__content {
    font-size: 0.8em;
  }
}
</style>