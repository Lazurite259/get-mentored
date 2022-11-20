<template>
  <div class="bg-primary-gradient">
    <div class="container-md">
      <div class="row register-form">
        <div class="col-md-8 offset-md-2">
          <form class="custom-form border rounded shadow" @submit.prevent="submit">
            <h1 style="margin-bottom: 6px">Mentor Register</h1>
            <p style="color: var(--bs-gray-500)">
              Start your career journey with GetMentored
            </p>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="email-input-field">First Name
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentor.first_name" placeholder="First Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="email-input-field">Last Name
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentor.last_name" placeholder="Last Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="email-input-field">Email
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="email" v-model="mentor.email" placeholder="Emial" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="pawssword-input-field">Password
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="password" v-model="mentor.password.password" placeholder="Password"
                  required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="repeat-pawssword-input-field">Comfirm Password
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="password" v-model="mentor.password.confirm"
                  placeholder="Confirm Password" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="dropdown-input-field">Occupation Title
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <Dropdown class="dropdownlist" :options="careers" v-on:selected="validateSelection" :maxItem="20"
                  :disabled="false" name="careerDropdown" placeholder="Select a Career">
                </Dropdown>
              </div>
            </div>
            <div v-if="errors.length" style="color: red;">
              <b>Please correct the following error(s):</b>
              <ul style="list-style: none;">
                <li v-for="(error, index) in errors" :key="index">{{ "- " + error.message }}</li>
              </ul>
            </div>
            <!-- <div class="form-check" style="width: 340.664px">
              <input class="form-check-input" type="checkbox" id="formCheck-1" /><label class="form-check-label"
                for="formCheck-1">I've read and accept the terms and conditions</label>
            </div> -->
            <button class="btn btn-light submit-button" type="submit"
              style="background: #7057cc; color: var(--bs-btn-bg)">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from '@/eventbus'
import swal from 'sweetalert'
import Dropdown from 'vue-simple-search-dropdown'

export default {
  components: {
    Dropdown
  },
  data () {
    return {
      mentor: {
        first_name: '',
        last_name: '',
        email: '',
        password: {
          password: '',
          confirm: ''
        },
        occupation_title: ''
      },
      errors: [],
      careers: []
    }
  },
  async created () {
    try {
      const response = await this.$http.get('/career')
      this.careers = response.data
      this.renameDropdownKeys()
      document.getElementsByName('careerDropdown').required = true
    } catch (error) {
      console.log(error.response)
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
    renameDropdownKeys () {
      this.careers = this.careers.map(function (obj) {
        obj.name = obj.occupation_title // Assign new key
        obj.id = obj.onet_code
        delete obj.occupation_title // Delete old key
        delete obj.onet_code
        return obj
      })
      console.log(this.careers)
    },
    validateSelection (selection) {
      this.mentor.occupation_title = selection.name
    },
    async submit () {
      this.errors = []
      const psw1 = this.mentor.password.password
      const psw2 = this.mentor.password.confirm
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
      if (this.mentor.occupation_title === undefined) {
        this.errors.push({
          message: 'Occupation title is required.'
        })
      }
      if (!this.errors.length) {
        try {
          const response = await this.$http.post('/mentor/mentor-register', this.mentor)
          console.log(response)
          const token = response.data.token
          if (token) {
            localStorage.setItem('mentor-jwt', token)
            EventBus.$emit('mentor-login', true)
            this.$router.push({
              name: 'mentor-profile',
              params: { id: response.data.data._id }
            })
            swal('Success', 'Registration Was successful', 'success')
          } else {
            swal('Error', 'Something Went Wrong', 'error')
          }
        } catch (err) {
          const error = err.response
          if (error.status === 409) {
            swal('Error', error.data.message, 'error')
          } else {
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
  src: url() format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

@font-face {
  font-family: 'Poppins';
  src: url() format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Poppins';
  src: url() format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.navbar {
  background-color: rgba(112, 87, 204, 1);
}

.bg-primary-demo {
  background-color: rgb(112, 87, 204);
}

.font-color {
  background: linear-gradient(248.66deg, #FFF973 0%, #62FFE3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.btn-outline-primary {
  --bs-btn-color: #fde69a;
  --bs-btn-border-color: #fde69a;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #fde69a;
  --bs-btn-hover-border-color: #fde69a;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #fde69a;
  --bs-btn-active-border-color: #fde69a;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fde69a;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #fde69a;
  --bs-gradient: none;
}

.card {
  background-color: #ffffff;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #fde69a;
  --bs-btn-border-color: #fde69a;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}

.bg-primary-gradient {
  background: linear-gradient(180deg, #7057cc, cornflowerblue);
}

.bs-icon {
  --bs-icon-size: .75rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: var(--bs-icon-size);
  width: calc(var(--bs-icon-size) * 2);
  height: calc(var(--bs-icon-size) * 2);
  color: var(--bs-primary);
}

.bs-icon-xs {
  --bs-icon-size: 1rem;
  width: calc(var(--bs-icon-size) * 1.5);
  height: calc(var(--bs-icon-size) * 1.5);
}

.bs-icon-sm {
  --bs-icon-size: 1rem;
}

.bs-icon-md {
  --bs-icon-size: 1.5rem;
}

.bs-icon-lg {
  --bs-icon-size: 2rem;
}

.bs-icon-xl {
  --bs-icon-size: 2.5rem;
}

.bs-icon.bs-icon-primary {
  color: var(--bs-white);
  background: var(--bs-primary);
}

.bs-icon.bs-icon-primary-light {
  color: var(--bs-primary);
  background: rgba(var(--bs-primary-rgb), .2);
}

.bs-icon.bs-icon-semi-white {
  color: var(--bs-primary);
  background: rgba(255, 255, 255, .5);
}

.bs-icon.bs-icon-rounded {
  border-radius: .5rem;
}

.bs-icon.bs-icon-circle {
  border-radius: 50%;
}

.register-form form.custom-form {
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
  .register-form form.custom-form {
    padding: 55px 10px;
  }
}

.register-form .custom-form h1 {
  display: inline-block;
  color: #4c565e;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10px 15px;
  margin-bottom: 60px;
  border-bottom: 2px solid rgb(108, 174, 224);
}

.register-form .custom-form .form-group {
  margin-bottom: 25px;
}

.register-form .custom-form .label-column {
  text-align: right;
  color: #5F5F5F;
}

@media (max-width:768px) {
  .register-form .custom-form .label-column {
    text-align: left;
  }
}

.register-form .custom-form .input-column {
  color: #5f5f5f;
  text-align: left;
}

.register-form .custom-form .input-column input {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 42px;
}

::v-deep .dropdownlist .dropdown-input {
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  font-size: 1rem;
  padding: 12px;
  min-width: auto;
  width: 100%;
  height: 42px;
  outline: none;
  color: #5f5f5f;
}

::v-deep .dropdownlist .dropdown-content {
  min-width: auto;
  width: 100%;
  max-height: 200px;
  border: 1px solid #dbdbdb;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  overflow: scroll;
}

::v-deep .dropdownlist .dropdown-content .dropdown-item {
  font-size: 1em;
}

.register-form .custom-form .submit-button {
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
