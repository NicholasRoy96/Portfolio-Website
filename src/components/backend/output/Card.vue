<template>
  <div>
    <!-- NORMAL -->
    <v-hover v-slot:default="{ hover }" open-delay="0">
      <v-card
        v-if="!user.editing"
        :elevation="hover ? 8 : 0"
        class="user-card pa-2 mb-2"
        shaped
        outlined
      >
        <v-card-title class="card-title">
          <strong>{{user.forename}} {{user.surname}}</strong>
        </v-card-title>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#5d91a8">mdi-email-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#5d91a8">mdi-calendar-range</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{user.dob}}</v-list-item-subtitle>
          <v-btn icon :disabled="editing" @click="()=>{user.editing = true; editing = true}">
            <v-icon color="blue">mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon :disabled="editing" @click="removeUser(user._id)">
            <v-icon color="red">mdi-close-circle</v-icon>
          </v-btn>
        </v-list-item>
      </v-card>
    </v-hover>

    <!-- EDITING -->
    <v-hover v-slot:default="{ hover }" open-delay="0">
      <v-card v-if="user.editing" :elevation="hover ? 12 : 2" rounded class="mb-2 pt-5 pl-5">
        <v-form v-model="user.valid" lazy-validation>
          <v-row class="pl-2 pr-7">
            <v-col cols="6">
              <v-text-field
                v-model="user.forename"
                :counter="15"
                :rules="forenameRules"
                label="Forename"
                class="edit-field"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="user.surname"
                :counter="15"
                :rules="surnameRules"
                label="Surname"
                class="edit-field"
                required
                dense
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="7">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="Email"
                class="edit-field edit-emailordob-field"
                prepend-icon="mdi-email-outline"
                required
                dense
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="space-between">
            <v-col cols="7">
              <v-menu
                v-model="user.menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="user.dob"
                    :rules="dobRules"
                    label="Date of birth"
                    class="edit-field edit-emailordob-field"
                    prepend-icon="mdi-calendar-range"
                    required
                    dense
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="user.dob" @input="user.menu = false"></v-date-picker>
              </v-menu>
            </v-col>

            <div class="edit-button-div">
              <v-btn icon :disabled="!user.valid" @click="update(user)">
                <v-icon color="green">mdi-check-outline</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-form>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import validator from "email-validator";

export default {
  name: "Card",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      valid: true,
      forename: "",
      forenameRules: [
        v => !!v || "Forename is required",
        v =>
          (v && v.length <= 15) || "Forename cannot be more than 15 characters"
      ],
      surname: "",
      surnameRules: [
        v => !!v || "Surname is required",
        v =>
          (v && v.length <= 15) || "Surname cannot be more than 15 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      dob: "",
      dobRules: [v => !!v || "Date of birth is required"],
      menu: false,
      editing: false
    };
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["getUsers", "updateUser", "deleteUser"]),
    updateValidate(user) {
      if (user.forename && user.surname && user.email && user.dob) {
        if (validator.validate(user.email)) return true;
      }
    },
    async removeUser(id) {
      this.deleteUser({ id });
    },
    async update(user) {
      if (this.updateValidate(user)) {
        this.updateUser(user);
        user.editing = false;
        this.editing = false;
      }
    }
  }
};
</script>

<style scoped>
.card-title {
  color: #444649;
  font-family: raleway, sans-serif;
}

.edit-button-div {
  position: absolute;
  bottom: 18px;
  right: 24px;
}
</style>