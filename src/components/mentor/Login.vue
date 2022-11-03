<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Login</h3>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-danger btn-block">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mentor: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        handleSubmitForm() { }
    }
}
</script>