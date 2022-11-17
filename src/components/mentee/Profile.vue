<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentee Profile</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First Name</Label>
                    <input type="text" class="form-control" v-model="mentee.first_name" required />
                </div>

                <div class="form-group">
                    <label>Last Name</Label>
                    <input type="text" class="form-control" v-model="mentee.last_name" required />
                </div>

                <div class="form-group">
                    <label>Email</Label>
                    <input type="text" class="form-control" v-model="mentee.email" required />
                </div>

                <div class="form-group">
                    <label>Password</Label>
                    <input type="password" class="form-control" v-model="mentee.password" required />
                </div>

                <div class="form-group">
                    <label>Birth Date</Label>
                    <input type="date" class="form-control" v-model="mentee.birth_date" required />
                </div>

                <div class="form-group">
                    <label>Education Level</Label>
                    <input type="text" class="form-control" v-model="mentee.education_level" required />
                </div>

                <div class="form-group">
                    <label>Work Experience</Label>
                    <input type="text" class="form-control" v-model="mentee.work_experience" />
                </div>

                <div class="form-group">
                    <label>Skills</Label>
                    <input type="text" class="form-control" v-model="mentee.skills" />
                </div>

                <div class="form-group">
                    <label>Interested Industry</Label>
                    <input type="text" class="form-control" v-model="mentee.interested_industry" />
                </div>

                <div class="form-group">
                    <label>Linkedin</Label>
                    <input type="text" class="form-control" v-model="mentee.linkedin" />
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Save</button>
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
            mentee: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                birth_date: '',
                education_level: '',
                work_experience:'',
                skills: [],
                interested_industry: [],
                linkedin: ''
            },
        }
    },
    created() {
        let apiURL = `http://localhost:3000/api/edit-mentee/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.mentee = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/api/update-mentee/${this.$route.params.id}`;
            axios.put(apiURL, this.mentee).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }        
    }
}
</script>