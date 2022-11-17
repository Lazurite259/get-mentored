<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Mentee Register</h3>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label>First Name</Label>
          <input type="text" class="form-control" v-model="mentee.first_name" placeholder="First Name" required />
        </div>
        <div class="form-group">
          <label>Last Name</Label>
          <input type="text" class="form-control" v-model="mentee.last_name" placeholder="Last Name" required />
        </div>
        <div class="form-group">
          <label>Email</Label>
          <input type="email" class="form-control" v-model="mentee.email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label>Password</Label>
          <input type="password" class="form-control" v-model="mentee.password.password" placeholder="Password"
            required />
        </div>
        <div class="form-group">
          <label>Confirm Password</Label>
          <input type="password" class="form-control" v-model="mentee.password.confirm" placeholder="Confirm Password"
            required />
        </div>
        <div v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ "- " + error.message }}</li>
          </ul>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-danger btn-block">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventbus'
import swal from 'sweetalert'

export default {
  data () {
    return {
      mentee: {
        first_name: '',
        last_name: '',
        email: '',
        password: {
          password: '',
          confirm: ''
        }
      },
      errors: []
    }
  },
  methods: {
    validPassword: function (psw) {
      const pswRegx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
      return pswRegx.test(psw)
    },
    matchPassword: function (psw1, psw2) {
      return psw1 === psw2
    },
    async submit () {
      this.errors = []
      const psw1 = this.mentee.password.password
      const psw2 = this.mentee.password.confirm
      if (!this.validPassword(psw1)) {
        this.errors.push({
          message: 'Password must be Minimum eight characters, at least one letter, one number and one special character.'
        })
      }
      if (!this.matchPassword(psw1, psw2)) {
        this.errors.push({
          message: 'Password does not match.'
        })
      }
      if (!this.errors.length) {
        return true
      }
      try {
        const response = await this.$http.post('/mentee/mentee-register', this.mentee)
        console.log(response)
        const token = response.data.token
        if (token) {
          localStorage.setItem('jwt', token)
          EventBus.$emit('mentee-login', true)
          this.$router.push('/mentee-profile')
          swal('Success', 'Registration Was successful', 'success')
        } else {
          swal('Error', 'Something Went Wrong', 'error')
        }
      } catch (err) {
        const error = err.response
        if (error.status == 409) {
          swal('Error', error.data.message, 'error')
        } else {
          swal('Error', err.message, 'error')
        }
      }
    }
  }
}
</script>
