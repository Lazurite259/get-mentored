<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentor Register</h3>
            <form @submit.prevent="submit">
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
                <!-- <div class="form-group">
                    <label>Birth Date</Label>
                    <input type="date" class="form-control" v-model="mentor.birth_date" placeholder="Birth Date"
                        required />
                </div>
                <div class="form-group">
                    <label>Occupation Title</Label>
                    <input type="text" class="form-control" v-model="mentor.occupation_title"
                        placeholder="Occupation Title" required />
                </div>
                <div class="form-group">
                    <label>Company Name</Label>
                    <input type="password" class="form-control" v-model="mentor.company_name" placeholder="Company Name"
                        required />
                </div>
                <div class="form-group">
                    <label>Year of Experience</Label>
                    <input type="text" class="form-control" v-model="mentor.year_of_experience"
                        placeholder="Year of Experience" required />
                </div>
                <div class="form-group">
                    <label>LinkedIn</Label>
                    <input type="text" class="form-control" v-model="mentor.linkedin" placeholder="LinkedIn" required />
                </div>
                <div class="form-group">
                    <label>Office Hour</Label>
                    <input type="text" class="form-control" v-model="mentor.office_hour" placeholder="Office Hour"
                        required />
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
            mentor: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                // birth_date: '',
                // occupation_title: '',
                // company_name: '',
                // year_of_experience: '',
                // linkedin: '',
                // office_hour: '',
            }
        }
    },
    methods: {
        async submit() {
            try {
                let response = await this.$http.post("/mentor/mentor-register", this.mentor);
                console.log(response);
                let token = response.data.token;
                if (token) {
                    localStorage.setItem("jwt", token);
                    EventBus.$emit('mentor-login', true);
                    this.$router.push("/mentor-profile");
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