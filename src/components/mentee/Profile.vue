<!-- <template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Mentee Profile</h3>
      <form @submit.prevent="update">
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
          <input type="email" class="form-control" v-model="mentee.email" disabled />
        </div>

        <div class="form-group">
          <label>Birth Date</Label>
          <input type="date" class="form-control" v-model="mentee.birth_date" required />
        </div>

        <div class="row form-group">
          <div class="col-sm-4 label-column">
            <label class="col-form-label" for="dropdown-input-field">Education Level
            </label>
          </div>
          <div class="col-sm-6 input-column">
            <Multiselect v-model="mentee.education_level" :options="education_levels" :searchable="false"
              :close-on-select="true" :show-labels="false" placeholder="Education level"></Multiselect>
          </div>
        </div>

        <div class="form-check">
          <input id="work-experience" type="checkbox" class="form-check-input" @click="checkWorkExperience()"
            v-model="mentee.work_experience" />
          <label class="form-check-label">Work Experience</Label>
        </div>

        <div id="yoe" class="form-group" style="display: none;">
          <label>Year Of Experience</Label>
          <input type="number" class="form-control" v-model="mentee.year_of_experience" />
        </div>

        <div class="form-group">
          <label>Skills</Label>
          <input type="text" class="form-control" v-model="mentee.skills" />
        </div>

        <div class="form-group">
          <label>Interested Careers</Label>
          <Multiselect v-model="mentee.interested_industry" :options="careers" :multiple="true" :close-on-select="false"
            :clear-on-select="false" :preserve-search="true" placeholder="Choose careers" label="occupation_title"
            track-by="onet_code" :preselect-first="true">
            <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single"
                v-if="values.length &amp;&amp; !isOpen">{{ values.length }} careers selected</span></template>
          </Multiselect>
        </div>

        <div class="form-group">
          <label>LinkedIn</Label>
          <input type="url" class="form-control" v-model="mentee.linkedin" />
        </div>

        <div class="form-group">
          <router-link to="#">Change password</router-link>
        </div> bu yao

        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template> -->

<template>
  <div class="bg-primary-gradient">
    <div class="container-md">
      <div class="row profile-form">
        <div class="col-md-8 offset-md-2">
          <form class="custom-form border rounded shadow" @submit.prevent="update">
            <h1 style="margin-bottom: 6px">Mentee Profile</h1>
            <p style="color: var(--bs-gray-500)">
            </p>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="name-input-field">First Name
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentee.first_name" placeholder="First Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="name-input-field">Last Name
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentee.last_name" placeholder="Last Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="email-input-field">Email
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="email" v-model="mentee.email" placeholder="Email" disabled />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="birthdate-input-field">Birth Date
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="date" v-model="mentee.birth_date" placeholder="Birth Date" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="dropdown-input-field">Education Level
                </label>
              </div>
              <div class="col-sm-6 input-column">
                <Multiselect v-model="mentee.education_level" :options="education_levels" :searchable="false"
                  :close-on-select="true" :show-labels="false" placeholder="Education Level"></Multiselect>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="form-check-label">Work Experience</Label>
              </div>
              <div class="col-sm-6">
                <input id="work-experience" type="checkbox" class="form-check form-check-input"
                  @click="checkWorkExperience()" v-model="mentee.work_experience" />
              </div>
            </div>
            <div id="yoe" class="row form-group" style="display: none;">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="yoe-input-field">Year Of Experience</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="number" v-model="mentee.year_of_experience" placeholder="Number" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="skills-input-field">Skills</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentee.skills" placeholder="Skills" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="dropdown-input-field">Interested Careers</Label>
              </div>
              <div class="col-sm-6 input-column">
                <Multiselect v-model="mentee.interested_industry" :options="careers" :multiple="true"
                  :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Choose careers"
                  label="occupation_title" track-by="onet_code" :preselect-first="true">
                  <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single"
                      v-if="values.length &amp;&amp; !isOpen">{{ values.length }} careers selected</span></template>
                </Multiselect>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label">LinkedIn</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="url" v-model="mentee.linkedin" placeholder="URL" />
              </div>
            </div>
            <button class="btn btn-light submit-button" type="submit"
              style="background: #7057cc; color: var(--bs-btn-bg)">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data () {
    return {
      mentee: {},
      decoded: {},
      token: '',
      education_levels: [
        'Doctoral degree',
        'Professional degree',
        'Master\'s degree',
        'Bachelor\'s degree',
        'Associate\'s degree',
        'Some college (no degree)',
        'High school diploma',
        'Less than a high school diploma'
      ],
      careers: []
    }
  },
  async created () {
    try {
      const careerData = await this.$http.get('/career')
      this.careers = careerData.data
      this.token = localStorage.getItem('mentee-jwt')
      this.decoded = VueJwtDecode.decode(this.token)
      const response = await this.$http.get(`/mentee/mentee-profile/${this.decoded._id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      this.mentee = response.data
      console.log(this.mentee)
      if (this.mentee.birth_date !== undefined) {
        this.setDate(this.mentee.birth_date)
      }
      if(this.mentee.work_experience){
        document.getElementById('yoe').style.display = 'flex'
      }
    } catch (error) {
      console.log(error.response)
    }
  },
  methods: {
    setDate (birthDate) {
      const date = new Date(birthDate)
      const year = date.getUTCFullYear()
      let month = date.getUTCMonth() + 1
      month = month <= 9 ? '0' + month : month
      let day = date.getUTCDate()
      day = day <= 9 ? '0' + day : day
      this.mentee.birth_date = year + '-' + month + '-' + day
    },
    checkWorkExperience () {
      const yoe = document.getElementById('yoe')
      if (document.getElementById('work-experience').checked === true) {
        yoe.style.display = 'flex'
      } else {
        yoe.style.display = 'none'
      }
    },
    async update () {
      try {
        const response = await this.$http.put(`/mentee/mentee-update/${this.decoded._id}`, this.mentee)
        console.log(response)
        this.token = response.data.token
        if (this.token) {
          localStorage.setItem('mentee-jwt', this.token)
          swal('Success', 'Profile updated', 'success')
        } else {
          swal('Error', 'Something went wrong', 'error')
        }
      } catch (err) {
        const error = err.response
        if (err.status === 409) {
          swal('Error', error.data.message, 'error')
        } else {
          swal('Error', err.message, 'error')
        }
      }
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<style scoped>
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

.profile-form form.custom-form {
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
  .profile-form form.custom-form {
    padding: 55px 10px;
  }
}

.profile-form .custom-form h1 {
  display: inline-block;
  color: #4c565e;
  font-size: 24px;
  font-weight: bold;
  padding: 0 10px 15px;
  margin-bottom: 60px;
  border-bottom: 2px solid rgb(108, 174, 224);
}

.profile-form .custom-form .form-group {
  margin-bottom: 25px;
}

.profile-form .custom-form .label-column {
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

.profile-form .custom-form .input-column input {
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

.profile-form .custom-form .submit-button {
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
