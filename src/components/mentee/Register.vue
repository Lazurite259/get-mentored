<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentee Register</h3>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label>First Name</Label>
                    <input type="text" class="form-control" v-model="mentee.first_name" placeholder="First Name"
                        required />
                </div>
                <div class="
                form-group">
                    <label>Last Name</Label>
                    <input type="text" class="form-control" v-model="mentee.last_name" placeholder="Last Name"
                        required />
                </div>
                <div class="form-group">
                    <label>Email</Label>
                    <input type="text" class="form-control" v-model="mentee.email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label>Password</Label>
                    <input type="password" class="form-control" v-model="mentee.password" placeholder="Password"
                        required />
                </div>
                <div class="form-group">
                    <label>Confirm Password</Label>
                    <input type="password" class="form-control" v-model="mentee.password_confirm"
                        placeholder="Confirm Password" required />
                </div>
                <!-- <div class="form-group">
                    <label>Birth Date</Label>
                    <input type="date" class="form-control" v-model="mentee.birth_date" placeholder="Birth Date"
                        required />
                </div>
                <div class="form-group">
                    <label>Education Level</Label>
                    <input type="text" class="form-control" v-model="mentee.education_level"
                        placeholder="Occupation Title" required />
                </div>
                <div class="form-group">
                    <label>Work Experience</Label>
                    <input type="text" class="form-control" v-model="mentee.work_experience" placeholder="Work Experience"
                        required />
                </div>
                <div class="form-group">
                    <label>Year of Experience</Label>
                    <input type="text" class="form-control" v-model="mentee.year_of_experience"
                        placeholder="Year of Experience" required />
                </div>
                <div class="form-group">
                    <label>Skills</Label>
                    <input type="text" class="form-control" v-model="mentee.skills" placeholder="Skills" required />
                </div>
                <div class="form-group">
                    <label>Interested Industry</Label>
                    <input type="text" class="form-control" v-model="mentee.interested_industry"
                        placeholder="Interested Industry" required />
                </div>
                <div class="form-group">
                    <label>LinkedIn</Label>
                    <input type="text" class="form-control" v-model="mentee.linkedin" placeholder="LinkedIn" />
                </div> -->
                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import EventBus from '@/eventbus';
import swal from 'sweetalert'
export default {
    data() {
        return {
            mentee: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                // birth_date: Date,
                // education_level: '',
                // work_experience: '',
                // skills: [],
                // interested_industry: [],
                // linkedin: ''
            }
        }
    },
    methods: {
        async submit() {
            try {
                let response = await this.$http.post("/mentee/mentee-register", this.mentee);
                console.log(response);
                let token = response.data.token;
                if (token) {
                    localStorage.setItem("jwt", token);
                    EventBus.$emit('mentee-login', true);
                    this.$router.push("/mentee-profile");
                    swal("Success", "Registration Was successful", "success");
                } else {
                    swal("Error", "Something Went Wrong", "error");
                }
            } catch (err) {
                let error = err.response;
                if (error.status == 409) {
                    swal("Error", error.data.message, "error");
                } else {
                    swal("Error", err.message, "error");
                }
            }
        },
    }
}
</script>