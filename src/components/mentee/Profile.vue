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
          <input type="text" class="form-control" v-model="mentee.email" disabled />
        </div>

        <div class="form-group">
          <label>Birth Date</Label>
          <input type="date" class="form-control" v-model="mentee.birth_date" required />
        </div>

        <div class="form-group">
          <label>Education Level</Label>
          <input type="text" class="form-control" v-model="mentee.education_evel" required />
        </div>

        <div class="form-group">
          <label>Work Experience</Label>
          <input type="text" class="form-control" v-model="mentee.work_experience" />
        </div>

        <div class="form-group">
          <label>Skills</Label>
          <input type="text" class="form-control" v-model="mentee.skills" />
        </div>

        <div class="form-group">
          <label>Interested Industry</Label>
          <input type="text" class="form-control" v-model="mentee.interested_industry" />
        </div>

        <div class="form-group">
          <label>LinkedIn</Label>
          <input type="text" class="form-control" v-model="mentee.linkedin" />
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
export default {
  data () {
    return {
      mentee: {}
    }
  },
  async created () {
    try {
      const token = localStorage.getItem('mentee-jwt')
      const decoded = VueJwtDecode.decode(token)
      const response = await this.$http.get(`/mentee/mentee-profile/${decoded._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.mentee = response.data
      console.log(this.mentee)
    } catch (error) {
      console.log(error.response)
    }
  },
  methods: {
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
