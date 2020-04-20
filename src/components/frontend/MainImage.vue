<template>
  <v-card flat>
    <v-img class="image" :src="image" />
  </v-card>
</template>

<script>
export default {
  name: "MainImage",
  props: {
    imageName: {
      type: String,
      required: true
    }
  },
  computed: {
    image() {
      return require(`@/assets/${this.imageName}`);
    }
  }
};
</script>