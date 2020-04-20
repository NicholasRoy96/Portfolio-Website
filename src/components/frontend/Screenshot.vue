<template>
  <v-card flat class="d-flex">
    <v-img class="image" :src="screenshot"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "Screenshot",
  props: {
    screenshotName: {
      type: String,
      required: true
    }
  },
  computed: {
    screenshot() {
      return require(`@/assets/${this.screenshotName}`);
    }
  }
};
</script>