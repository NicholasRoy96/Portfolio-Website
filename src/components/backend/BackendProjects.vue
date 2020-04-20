<template>
  <div class="background backend-fontsyling">
    <v-container class="pb-10">
      <v-row class="mt-12 mb-10" justify="center">
        <v-col cols="12">
          <h1 align="center" class="heading">BACK-END PROJECTS</h1>
          <div class="heading-underline"></div>
        </v-col>
        <v-col cols="12">
          <p align="center" class="heading-subtitle">I love backend web development.</p>
          <p align="center" class="backend-description">
            Try interacting with the RESTful API below built using
            <strong>Express</strong>,
            <strong>Node.js</strong>, and
            <strong>MongoDB.</strong>
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <!-- Form -->
        <v-col cols="12" sm="10" md="5">
          <h1 align="center" class="create-view-heading">CREATE USER</h1>
          <Input />
        </v-col>

        <!-- Output -->
        <v-col cols="12" sm="10" md="7" class="mt-10 mt-md-0">
          <h1 align="center" class="create-view-heading">VIEW LATEST USERS</h1>
          <h1
            align="center"
            class="ml-md-8 no-users-heading"
            v-if="!users.length"
          >No users exist. Try creating one!</h1>
          <Output />
        </v-col>

        <div class="d-flex mt-10">
          <h1 class="view-code-title">View the code on</h1>
          <v-btn icon href="https://github.com/NicholasRoy96/portfolio-api" target="_blank">
            <v-icon size="32" color="black">mdi-github</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Input from "./input/Input";
import Output from "./output/Output";

export default {
  name: "Backend",
  components: {
    Input,
    Output
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>
<style>
.edit-field .v-label {
  color: #5d91a8 !important;
}

.edit-emailordob-field .v-icon {
  color: #5d91a8 !important;
}

.edit-emailordob-field .v-input__control {
  padding-left: 15px;
}
</style>

<style scoped>
.background {
  background-color: #f5f5f5;
}

.backend-fontstyling {
  color: #444649;
  font-family: raleway, sans-serif;
}

.heading-subtitle {
  color: #444649;
  font-family: raleway, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
}

.backend-description {
  color: #444649;
  font-family: raleway, sans-serif;
  font-size: 1.2em;
}

.create-view-heading {
  color: #455a64;
  font-family: raleway, sans-serif;
  padding-bottom: 20px;
}

.no-users-heading {
  color: #444649;
  font-family: raleway, sans-serif;
  font-size: 1.5em;
  padding-top: 40px;
}

.view-code-title {
  color: #444649;
  font-family: raleway, sans-serif;
  font-size: 1.5em;
  padding-right: 8px;
}
</style>