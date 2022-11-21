<template>
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

        <!-- <div class="form-group">
          <router-link to="#">Change password</router-link>
        </div> -->

        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </form>
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
      console.log(document.getElementById('work-experience').checked)
      const yoe = document.getElementById('yoe')
      if (document.getElementById('work-experience').checked === true) {
        yoe.style.display = 'block'
      } else {
        yoe.style.display = 'none'
      }
    },
    update () {
      // const apiURL = `http://localhost:4000/api/update-mentee/${this.$route.params.id}`
      // axios.put(apiURL, this.mentee).then((res) => {
      //   console.log(res)
      //   this.$router.push('/view')
      // }).catch(error => {
      //   console.log(error)
      // })
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<style scoped>

</style>
