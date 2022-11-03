<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Register</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</Label>
                    <input type="text" class="form-control" v-model="mentor.first_name" placeholder="First Name"
                        required />
                </div>
                <div class="
                form-group">
                    <label>Last Name</Label>
                    <input type="text" class="form-control" v-model="mentor.last_name" placeholder="Last Name"
                        required />
                </div>
                <div class="form-group">
                    <label>Email</Label>
                    <input type="text" class="form-control" v-model="mentor.email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label>Password</Label>
                    <input type="password" class="form-control" v-model="mentor.password" placeholder="Password"
                        required />
                </div>
              <div class="form-group">
                <label>Confirm Password</Label>
                <input type="password" class="form-control" v-model="mentor.password_confirm"
                       placeholder="Confirm Password" required />
              </div>
              <div class="form-group">
                <label>Birth Date</Label>
                <input type="date" class="form-control" v-model="mentor.birth_date"
                       placeholder="Birth Date" required />
              </div>
              <div class="form-group">
                <label>Occupation Title</Label>
                <input type="text" class="form-control" v-model="mentor.occupation_title"
                       placeholder="Occupation Title" required />
              </div>
              <div class="form-group">
                <label>Company Name</Label>
                <input type="password" class="form-control" v-model="mentor.company_name"
                       placeholder="Company Name" required />
              </div>
              <div class="form-group">
                <label>Year of Experience</Label>
                <input type="text" class="form-control" v-model="mentor.year_of_experience"
                       placeholder="Year of Experience" required />
              </div>
              <div class="form-group">
                <label>LinkedIn</Label>
                <input type="text" class="form-control" v-model="mentor.linkedin"
                       placeholder="LinkedIn" required />
              </div>
              <div class="form-group">
                <label>Office Hour</Label>
                <input type="text" class="form-control" v-model="mentor.office_hour"
                       placeholder="Office Hour" required />
              </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            mentor: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                birth_date: '',
                occupation_title: '',
                company_name: '',
                year_of_experience: '',
                linkedin: '',
                office_hour: '',
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-mentor';

            axios.post(apiURL, this.mentor).then(() => {
                this.$router.push('/view')
                this.mentor = {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    birth_date: '',
                    occupation_title: '',
                    company_name: '',
                    year_of_experience: '',
                    linkedin: '',
                    office_hour: '',
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>