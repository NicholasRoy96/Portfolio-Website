<template>
  <v-card flat color="transparent">
    <h1 class="project-title">{{project.title}}</h1>
    <div class="project-title-underline"></div>
    <div v-for="(tech, index) in project.tech" :key="index" class="tech-div">
      <p class="tech-tag">{{tech}}</p>
    </div>
    <v-card-text class="project-description">{{project.description}}</v-card-text>
    <div class="d-flex">
      <v-btn
        large
        class="project-button ma-4 mt-8"
        outlined
        :href="project.links.liveLink"
        target="_blank"
      >Visit website</v-btn>
      <v-btn
        v-if="project.links.codeLink"
        large
        class="project-button ma-4 mt-8 ml-8"
        outlined
        :href="project.links.codeLink"
        target="_blank"
      >View code</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Description",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>