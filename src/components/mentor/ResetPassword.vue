<template>
  <div class="bg-primary-gradient">
    <div class="container-md">
      <div class="row reset-form">
        <div class="col-md-8 offset-md-2">
          <form class="custom-form border rounded shadow" @submit.prevent="submit">
            <h1 style="margin-bottom: 6px">Reset Password</h1>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label">Password</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="password" v-model="password" placeholder="Password" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label">Comfirm Password</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="password" v-model="password_confirm" placeholder="Confirm Password"
                  required />
              </div>
            </div>
            <div v-if="errors.length" style="color: red;">
              <b>Please correct the following error(s):</b>
              <ul style="list-style: none;">
                <li v-for="(error, index) in errors" :key="index">{{ "- " + error.message }}</li>
              </ul>
            </div>
            <button class="btn btn-light submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      password: '',
      password_confirm: '',
      errors: []
    }
  },
  methods: {
    validPassword: function (psw) {
      const pswRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      return pswRegx.test(psw)
    },
    matchPassword: function (psw1, psw2) {
      return psw1 === psw2
    },
    async submit () {
      this.errors = []
      const psw1 = this.password
      const psw2 = this.password_confirm
      if (!this.validPassword(psw1)) {
        this.errors.push({
          message: 'Password must be Minimum eight characters, at least one letter, one number, and one special character(@$!%*#?&).'
        })
      }
      if (!this.matchPassword(psw1, psw2)) {
        this.errors.push({
          message: 'Password does not match.'
        })
      }
      if (!this.errors.length) {
        try {
          const response = await this.$http.put(`/mentor/reset-password/${this.$route.params.resetToken}`, {
            password: this.password
          })
          if (response.status === 200) {
            swal('Success', 'Password reset successful', 'success')
            this.$router.push('/')
          } else {
            swal('Error', 'Something went wrong', 'error')
          }
        } catch (err) {
          const error = err.response
          if (error.status === 400) {
            swal('Error', error.data.message, 'error')
          } else {
            console.log(err)
            swal('Error', err.message, 'error')
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: 'Poppins';
  src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Poppins';
  src: url(@/assets/fonts/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.bg-primary-gradient {
  background: linear-gradient(180deg, #7057cc, cornflowerblue);
}

.reset-form form.custom-form {
  padding: 55px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  font: bold 14px sans-serif;
  text-align: center;
  margin: 50px;
  color: #333;
}

@media (max-width:400px) {
  .reset-form form.custom-form {
    padding: 55px 10px;
  }
}

.reset-form .custom-form h1 {
  display: inline-block;
  color: #4c565e;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10px 15px;
  margin-bottom: 60px;
  border-bottom: 2px solid rgb(108, 174, 224);
}

.reset-form .custom-form .form-group {
  margin-bottom: 25px;
}

.reset-form .custom-form .label-column {
  text-align: right;
  color: #5F5F5F;
}

@media (max-width:768px) {
  .reset-form .custom-form .label-column {
    text-align: left;
  }
}

.reset-form .custom-form .input-column {
  color: #5f5f5f;
  text-align: left;
}

.reset-form .custom-form .input-column input {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 42px;
}

.reset-form .custom-form .input-column textarea {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 100px;
}

.reset-form .custom-form .submit-button {
  border-radius: 2px;
  background: #6caee0;
  color: #ffffff;
  font-weight: bold;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 14px 22px;
  border: 0;
  margin: 30px;
  outline: none;
}
</style>
