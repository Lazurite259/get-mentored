<template>
  <section class="position-relative py-4 py-xl-5 bg-primary-gradient">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Mentor Login</h2>
          <p class="w-lg-50">Welcome to GetMentored</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-5" style="background: rgba(255, 255, 255, 0);border-color: rgba(255, 255, 255, 0);">
            <div class="card-body d-flex flex-column align-items-center">
              <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
                  class="bi bi-person">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
                  </path>
                </svg>
              </div>
              <form @submit.prevent="login" class="text-center" method="post">
                <div class="mb-3">
                  <input class="form-control" v-model="mentor.email" type="email" name="email" placeholder="Email"
                    required />
                </div>
                <div class="mb-3">
                  <input class="form-control" v-model="mentor.password" type="password" name="password"
                    placeholder="Password" required />
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-block w-100" type="submit">Login</button>
                </div>
                <div class="mb-3">
                  <router-link style="color: white;" to="/mentor-register">Create an account</router-link>
                </div>
                <div class="mb-3">
                  <router-link style="color: white;" to="/mentor-forgot-password">Forgot password</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
        const error = err.response
        if (error.status === 401) {
          swal('Error', error.data.message, 'error')
        } else {
          swal('Error', err.message, 'error')
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

.card {
  background-color: #ffffff;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.btn-primary {
  --bs-btn-color: #1e266d;
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
</style>
