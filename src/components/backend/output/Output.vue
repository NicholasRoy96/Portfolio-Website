<template>
  <v-row class="ml-md-8">
    <v-col cols="12" v-for="(user, i) in users" :key="i">
      <Card :user="user" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "./Card";

export default {
  name: "Output",
  components: {
    Card
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["getUsers"])
  },
  async mounted() {
    await this.getUsers();
  }
};
</script>

<style scoped>
</style>