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
          <input type="password" class="form-control" v-model="mentor.password" placeholder="Password" required />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-danger btn-block">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert'
import EventBus from '@/eventbus'
export default {
  data () {
    return {
      mentor: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await this.$http.post('/mentor/mentor-login', this.mentor)
        const token = response.data.token
        localStorage.setItem('mentor-jwt', token)
        if (token) {
          EventBus.$emit('mentor-login', true)
          swal('Success', 'Login Successful', 'success')
          this.$router.push('/mentor-profile')
        }
      } catch (err) {
        swal('Error', 'Something Went Wrong', 'error')
        console.log(err.response)
      }
    }
  }
}
</script>
