<template>
  <div class="bg-primary-gradient">
    <div class="container-md">
      <div class="row profile-form">
        <div class="col-md-8 offset-md-2">
          <form class="custom-form border rounded shadow" @submit.prevent="update">
            <h1 style="margin-bottom: 6px">Mentee Profile</h1>
            <!-- TODO: Add image upload -->
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="name-input-field">First Name</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentee.first_name" placeholder="First Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="name-input-field">Last Name</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="text" v-model="mentee.last_name" placeholder="Last Name" required />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="email-input-field">Email</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="email" v-model="mentee.email" placeholder="Email" disabled />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="birthdate-input-field">Birth Date</label>
              </div>
              <div class="col-sm-6 input-column">
                <input class="form-control" type="date" v-model="mentee.birth_date" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="dropdown-input-field">Education Level</label>
              </div>
              <div class="col-sm-6 input-column">
                <Multiselect class="education-dropdown" v-model="mentee.education_level" :options="education_levels"
                  :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Education Level">
                </Multiselect>
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
            <!-- TODO: Change "Skills" input to multiselect, using ISOT API(https://skillsapiv5.docs.apiary.io/) -->
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="skills-input-field">Skills</label>
              </div>
              <div class="col-sm-6 input-column">
                <textarea class="form-control" type="text" v-model="mentee.skills"
                  placeholder="Type your skills here"></textarea>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-sm-4 label-column">
                <label class="col-form-label" for="dropdown-input-field">Interested Careers</Label>
              </div>
              <div class="col-sm-6 input-column">
                <Multiselect class="career-multiselect" v-model="mentee.interested_industry" :options="careers"
                  :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                  placeholder="Choose careers" label="occupation_title" track-by="onet_code" :preselect-first="true">
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
            <!-- TODO: Change password -->
            <!-- <div class="form-group">
              <router-link to="#">Change password</router-link>
            </div> -->
            <button class="btn btn-light submit-button" type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
import Multiselect from 'vue-multiselect'
import swal from 'sweetalert'
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
      if (this.mentee.work_experience) {
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
          this.$router.push('/')
        } else {
          swal('Error', 'Something went wrong', 'error')
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
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
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
  .profile-form .custom-form .label-column {
    text-align: left;
  }
}

.profile-form .custom-form .input-column {
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

.profile-form .custom-form .input-column textarea {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 100px;
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

::v-deep .education-dropdown .multiselect__option--highlight {
  background: #bca3e4;
  outline: none;
  color: #fff
}

::v-deep .education-dropdown .multiselect__tags {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  font-weight: normal;
}

::v-deep .education-dropdown .multiselect__option {
  font-weight: normal;
}

::v-deep .career-multiselect .multiselect__option--highlight {
  background: #bca3e4;
  outline: none;
  color: #fff
}

::v-deep .career-multiselect .multiselect__tags {
  color: #5f5f5f;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #dbdbdb;
  border-radius: 2px;
}

::v-deep .career-multiselect .multiselect__tag {
  background: #a788dc;
  font-weight: normal;
}

::v-deep .career-multiselect .multiselect__tag-icon:hover {
  background: #936cd4
}

::v-deep .career-multiselect .multiselect__option {
  font-weight: normal;
}
</style>
