<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="forename"
          :counter="15"
          :rules="forenameRules"
          :disabled="editing"
          label="Forename"
          required
          solo-inverted
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field
          v-model="surname"
          :counter="15"
          :rules="surnameRules"
          :disabled="editing"
          label="Surname"
          required
          solo-inverted
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          :disabled="editing"
          label="E-mail"
          solo-inverted
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dob"
              :rules="dobRules"
              :disabled="editing"
              label="Date of birth"
              required
              solo-inverted
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dob" @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-btn :disabled="!valid || editing" color="success" class="mr-4 mt-2" @click="create">Create</v-btn>

    <v-btn color="error" class="mr-4 mt-2" @click="reset">Reset</v-btn>
  </v-form>
</template>

<script>
import validator from "email-validator";
import { mapActions } from "vuex";

export default {
  name: "Input",
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
  methods: {
    ...mapActions(["createUser"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    createValidate() {
      if (this.forename && this.surname && this.email && this.dob) {
        if (validator.validate(this.email)) return true;
      }
    },
    async create() {
      this.validate();
      if (this.createValidate()) {
        this.createUser({
          forename: this.forename,
          surname: this.surname,
          email: this.email,
          dob: this.dob
        });
        this.reset();
      }
    }
  }
};
</script>

<style scoped>
</style>