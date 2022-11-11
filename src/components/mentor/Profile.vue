<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Mentor Profile</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>First Name</Label>
          <input type="text" class="form-control" v-model="mentor.first_name" required />
        </div>

        <div class="form-group">
          <label>Last Name</Label>
          <input type="text" class="form-control" v-model="mentor.last_name" required />
        </div>

        <div class="form-group">
          <label>Email</Label>
          <input type="text" class="form-control" v-model="mentor.email" required />
        </div>

        <div class="form-group">
          <label>Password</Label>
          <input type="password" class="form-control" v-model="mentor.password" required />
        </div>

        <div class="form-group">
          <label>Birth Date</Label>
          <input type="date" class="form-control" v-model="mentor.birth_date" required />
        </div>

        <div class="form-group">
          <label>Occupation Title</Label>
          <input type="text" class="form-control" v-model="mentor.occupation_title" required />
        </div>

        <div class="form-group">
          <label>Company Name</Label>
          <input type="text" class="form-control" v-model="mentor.company_name" />
        </div>

        <div class="form-group">
          <label>Year Of Experience</Label>
          <input type="text" class="form-control" v-model="mentor.year_of_experience" />
        </div>

        <div class="form-group">
          <label>Office Hour</Label>
          <input type="text" class="form-control" v-model="mentor.office_hour" />
        </div>

        <div class="form-group">
          <label>Linkedin</Label>
          <input type="text" class="form-control" v-model="mentor.linkedin" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      mentor: {}
    }
  },
  created () {
    const apiURL = `http://localhost:4000/api/edit-mentor/${this.$route.params.id}`
    axios.get(apiURL).then((res) => {
      this.mentor = res.data
    })
  },
  methods: {
    handleUpdateForm () {
      const apiURL = `http://localhost:4000/api/update-mentor/${this.$route.params.id}`
      axios.put(apiURL, this.mentor).then((res) => {
        console.log(res)
        this.$router.push('/view')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
