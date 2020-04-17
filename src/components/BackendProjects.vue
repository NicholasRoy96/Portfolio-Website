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
                    <p align="center" class="backend-description">Try interacting with the RESTful API below built using <strong>Express</strong>, <strong>Node.js</strong>, and <strong>MongoDB.</strong></p>
                </v-col>
            </v-row>

            <v-row justify="center">

                <!-- Form -->
                <v-col cols="12" sm="10" md="5">
                    <h1 align="center" class="create-view-heading">CREATE USER</h1>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    >
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

                        <v-btn
                        :disabled="!valid || editing"
                        color="success"
                        class="mr-4 mt-2"
                        @click="createUser"
                        >
                        Create
                        </v-btn>

                        <v-btn
                        color="error"
                        class="mr-4 mt-2"
                        @click="reset"
                        >
                        Reset
                        </v-btn>
                    </v-form>
                </v-col>

                <!-- Output -->
                <v-col cols="12" sm="10" md="7" class="mt-10 mt-md-0">
                    <h1 align="center" class="create-view-heading">VIEW LATEST USERS</h1>
                    <h1 align="center" class="ml-md-8 no-users-heading" v-if="!users.length">No users exist. Try creating one!</h1>
                    <v-row class="ml-md-8">
                        <v-col cols="12" v-for="(user, i) in users" :key="i">

                            <!-- Normal -->
                            <v-hover
                            v-slot:default="{ hover }"
                            open-delay="0"
                            >
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
                                        <v-btn icon :disabled="editing" @click="deleteUser(user._id)">
                                            <v-icon color="red">mdi-close-circle</v-icon>
                                        </v-btn>
                                    </v-list-item>
                                </v-card>
                            </v-hover>


                            <!-- Editing -->
                            <v-hover
                            v-slot:default="{ hover }"
                            open-delay="0"
                            >
                                <v-card
                                v-if="user.editing"
                                :elevation="hover ? 12 : 2"
                                rounded
                                class="mb-2 pt-5 pl-5"
                                >
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
                                                <v-btn icon :disabled="!user.valid" @click="updateUser(user)">
                                                    <v-icon color="green">mdi-check-outline</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-row>
                                    </v-form>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
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
import axios from 'axios'
import validator from 'email-validator'

export default {
    name: 'BackendForm',
    data () {
        return {
            valid: true,
            forename: '',
            forenameRules: [
                v => !!v || 'Forename is required',
                v => (v && v.length <= 15) || 'Forename cannot be more than 15 characters',
            ],
            surname: '',
            surnameRules: [
                v => !!v || 'Surname is required',
                v => (v && v.length <= 15) || 'Surname cannot be more than 15 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            dob: '',
            dobRules: [
                v => !!v || 'Date of birth is required',
            ],
            menu: false,
            users: [],
            editing: false
        }
    },
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        createValidate () {
            if (this.forename && this.surname && this.email && this.dob) {
                if (validator.validate(this.email)) return true
            }
        },
        updateValidate (user) {
            if (user.forename && user.surname && user.email && user.dob) {
                if (validator.validate(user.email)) return true
            }
        },
        async getUsers () {
            await axios.get('https://git.heroku.com/nick-roy-api.git/user/getAll')
            .then(response => {
                this.users = response.data.reverse().slice(0, 3)
                .map(user => {
                    return {...user, editing: false, menu: false, valid: true}
                })
            })
            .catch(error => console.log(error))
        },
        async createUser () {
            this.validate()
            if (this.createValidate()) {
                await axios.post('https://git.heroku.com/nick-roy-api.git/user/create', {
                    forename: this.forename,
                    surname: this.surname,
                    email: this.email,
                    dob: this.dob
                })
                .then((response) => {
                    console.log(response.data)
                    this.getUsers()
                    this.reset()
                })
                .catch(error => console.log(error))
            }
        },
        async deleteUser (id) {
            await axios.delete(`https://git.heroku.com/nick-roy-api.git/user/delete/${id}`)
            .then((response) => {
                console.log(response)
                this.getUsers()
            })
            .catch(error => console.log(error))
        },
        async updateUser (user) {
            if (this.updateValidate(user)) {
                const updateDocument = {
                    forename: user.forename,
                    surname: user.surname,
                    email: user.email,
                    dob: user.dob
                }
                await axios.put(`https://git.heroku.com/nick-roy-api.git/user/update/${user._id}`, updateDocument)
                .then(response => {
                    console.log(response)
                    user.editing = false
                    this.editing = false
                })
                .catch(error => console.log(error))
            }
        }
    },
    async mounted() {
        await this.getUsers()
    }
}
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

.card-title {
    color: #444649;
    font-family: raleway, sans-serif;
    /* border-bottom: 2px solid #444649; */
}

.edit-button-div {
    position: absolute;
    bottom: 18px;
    right: 24px;
}

.view-code-title {
    color: #444649;
    font-family: raleway, sans-serif;
    font-size: 1.5em;
    padding-right: 8px;
}
</style>