<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentee Register</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</Label>
                    <input type="text" class="form-control" v-model="user.first_name" placeholder="First Name"
                        required />
                </div>
                <div class="
                form-group">
                    <label>Last Name</Label>
                    <input type="text" class="form-control" v-model="user.last_name" placeholder="Last Name" required />
                </div>
                <div class="form-group">
                    <label>Email</Label>
                    <input type="text" class="form-control" v-model="user.email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label>Password</Label>
                    <input type="password" class="form-control" v-model="user.password" placeholder="Password"
                        required />
                </div>
                <div class="form-group">
                    <label>Confirm Password</Label>
                    <input type="password" class="form-control" v-model="user.password_confirm"
                        placeholder="Confirm Password" required />
                </div>
                <div class="form-group">
                    <label>Birth Date</Label>
                    <input type="date" class="form-control" v-model="user.birth_date" placeholder="Birth Date"
                        required />
                </div>
                <div class="form-group">
                    <label>Education Level</Label>
                    <input type="text" class="form-control" v-model="user.education_level"
                        placeholder="Occupation Title" required />
                </div>
                <div class="form-group">
                    <label>Work Experience</Label>
                    <input type="text" class="form-control" v-model="user.work_experience" placeholder="Work Experience"
                        required />
                </div>
                <div class="form-group">
                    <label>Year of Experience</Label>
                    <input type="text" class="form-control" v-model="user.year_of_experience"
                        placeholder="Year of Experience" required />
                </div>
                <div class="form-group">
                    <label>Skills</Label>
                    <input type="text" class="form-control" v-model="user.skills" placeholder="Skills" required />
                </div>
                <div class="form-group">
                    <label>Interested Industry</Label>
                    <input type="text" class="form-control" v-model="user.interested_industry"
                        placeholder="Interested Industry" required />
                </div>
                <div class="form-group">
                    <label>LinkedIn</Label>
                    <input type="text" class="form-control" v-model="user.linkedin" placeholder="LinkedIn" />
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: '',
                birth_date: Date,
                education_level: '',
                work_experience: '',
                skills: [],
                interested_industry: [],
                linkedin: ''
            }
        }
    },
    methods: {
        handleSubmitForm() { }
    }
}
</script>