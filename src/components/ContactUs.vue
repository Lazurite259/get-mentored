<template>
  <div class="bg-primary-gradient">
    <div class="container-md">
      <div class="row contact-form">
        <div class="col-md-8 offset-md-2">
          <form class="custom-form border rounded shadow" @submit.prevent="submit">
            <h1 style="margin-bottom: 6px">Contact Us</h1>
            <div class="mb-3 input-column">
              <input class="form-control" type="text" v-model="name" placeholder="Name" required />
            </div>
            <div class="mb-3 input-column">
              <input class="form-control" type="email" v-model="email" placeholder="Email" required />
            </div>
            <div class="mb-3 input-column">
              <textarea class="form-control" v-model="message" placeholder="Message" rows="6" required></textarea>
            </div>
            <button class="btn btn-light submit-button" type="submit">Send</button>
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
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await this.$http.post('/main/contact', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        if (response.data.success) {
          swal('Success', response.data.message, 'success')
          // this.$router.push('/')
        } else {
          swal('Error', 'Something went wrong', 'error')
        }
      } catch (err) {
        const error = err.response
        if (error.status === 500) {
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

.contact-form form.custom-form {
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
  .contact-form form.custom-form {
    padding: 55px 10px;
  }
}

.contact-form .custom-form h1 {
  display: inline-block;
  color: #4c565e;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10px 15px;
  margin-bottom: 60px;
  border-bottom: 2px solid rgb(108, 174, 224);
}

.contact-form .custom-form .input-column {
  color: #5f5f5f;
  text-align: left;
}

.contact-form .custom-form input {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 42px;
}

.contact-form .custom-form textarea {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 100px;
}

.contact-form .custom-form .submit-button {
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
