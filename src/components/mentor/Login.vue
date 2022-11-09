<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentor Login</h3>
            <form @submit.prevent="login">
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
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </div>
            </form>
            <p v-if="showError" id="error">Username or Password is incorrect</p>
        </div>
    </div>
</template>
<script>
import swal from 'sweetalert'
import EventBus from '@/eventbus';
export default {
    data() {
        return {
            mentor: {
                email: '',
                password: '',
            },
            showError: false
        }
    },
    methods: {
        async login() {
            try {
                let response = await this.$http.post("/mentor/mentor-login", this.mentor);
                let token = response.data.token;
                localStorage.setItem("jwt", token);
                if (token) {
                    EventBus.$emit('login', true);
                    swal("Success", "Login Successful", "success");
                    this.$router.push("/mentor-profile");
                }
            } catch (err) {
                swal("Error", "Something Went Wrong", "error");
                console.log(err.response);
            }
        },
    }
}
</script>