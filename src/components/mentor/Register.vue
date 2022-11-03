<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Register</h3>
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
                    <label>Comfirm Password</Label>
                    <input type="password" class="form-control" v-model="user.password_confirm"
                        placeholder="Comfirm Password" required />
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
            }
        }
    },
    methods: {
        handleSubmitForm() { }
    }
}
</script>