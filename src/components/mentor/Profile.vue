<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Mentor Profile</h3>
      <form @submit.prevent="update">
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
          <input type="text" class="form-control" v-model="mentor.email" disabled />
        </div>

        <div class="form-group">
          <label>Birth Date</Label>
          <input type="date" class="form-control" v-model="mentor.birth_date" required />
        </div>

        <div class="row form-group">
          <div class="col-sm-4 label-column">
            <label class="col-form-label" for="dropdown-input-field">Occupation Title
            </label>
          </div>
          <div class="col-sm-6 input-column">
            <Dropdown class="dropdownlist" :options="careers" v-on:selected="validateSelection" :maxItem="20"
              :disabled="false" name="careerDropdown">
            </Dropdown>
          </div>
        </div>

        <div class="form-group">
          <label>Company Name</Label>
          <input type="text" class="form-control" v-model="mentor.company_name" required />
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
          <label>LinkedIn</Label>
          <input type="text" class="form-control" v-model="mentor.linkedin" />
        </div>

        <div class="form-group">
          <label>Introduction</Label>
          <textarea type="text" class="form-control" v-model="mentor.introduction" />
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
import VueJwtDecode from "vue-jwt-decode";
import Dropdown from 'vue-simple-search-dropdown'
import swal from 'sweetalert'
export default {
  components: {
    Dropdown
  },
  data () {
    return {
      mentor: {},
      decoded: {},
      careers: [],
      token: ''
    }
  },
  async created () {
    try {
      const careerData = await this.$http.get('/career')
      this.careers = careerData.data
      this.renameDropdownKeys()
      this.token = localStorage.getItem("mentor-jwt");
      this.decoded = VueJwtDecode.decode(this.token);
      const response = await this.$http.get(`/mentor/mentor-profile/${this.decoded._id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      this.mentor = response.data;
      console.log(this.mentor)
      document.getElementsByName('careerDropdown')[0].setAttribute('value', this.mentor.occupation_title)
    } catch (error) {
      console.log(error.response)
    }
  },
  methods: {
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
    async update () {
      try{
        const response = await this.$http.put(`/mentor/mentor-update/${this.decoded._id}`, this.mentor)
        console.log(response)
        this.token = response.data.token
        if (this.token) {
          localStorage.setItem('mentor-jwt', this.token)
          swal('Success', 'Profile updated', 'success')
        } else {
          swal('Error', 'Something went wrong', 'error')
        }
      } catch(err){
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
<style>
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
</style>