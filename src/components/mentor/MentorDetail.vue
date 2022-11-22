<template>
  <div class="bg-services">
    <div class="container py-4 py-xl-5">
      <div class="row mb-5">
        <div class="col-md-5">
          <div class="profile-card shadow">
            <div class="profile-bar">
              <div class="profile-back"></div>
              <img class="rounded-circle profile-pic" src="@/assets/img/users.jpg">
            </div>
            <div class="profile-block mx-auto px-md-3">
              <h3>{{ mentor.first_name }} {{ mentor.last_name }}</h3>
              <ul>
                <li class="row">
                  <span class="col-md-5"><b>Occupation Title</b></span>
                  <span class="col-md-7 profile-right">{{ mentor.occupation_title }}</span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>Company Name</b></span>
                  <span class="col-md-7 profile-right">{{ mentor.company_name }}</span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>Location</b></span>
                  <span class="col-md-7 profile-right">{{ mentor.location }}</span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>Email</b></span>
                  <span class="col-md-7 profile-right">
                    <a :href="'mailto:' + mentor.email">{{ mentor.email }}</a>
                  </span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>Year of Experiences (YOE)</b></span>
                  <span class="col-md-7 profile-right">{{ mentor.year_of_experience }}</span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>Office Hour</b></span>
                  <span class="col-md-7 profile-right">{{ mentor.office_hour }}</span>
                </li>
                <li class="row">
                  <span class="col-md-5"><b>LinkedIn</b></span>
                  <span class="col-md-7 profile-right"><a :href="mentor.linkedin">Go to LinkedIn</a></span>
                </li>
              </ul>
              <!-- <a class="btn btn-outline-primary" role="button" href="#">Book an experience</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="profile-right-side px-md-3 py-md-3 shadow">
            <h3>About Me</h3>
            <div>
              <p>{{ mentor.introduction }}</p>
              <!-- <h3>Experience</h3>
              <p>Vivamus id eros rhoncus, finibus mauris at, euismod metus. Duis tincidunt eget arcu ac molestie.
                Vestibulum non porta tellus, quis sollicitudin turpis. Praesent ut luctus augue. </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mentor: {}
    }
  },
  async created () {
    try {
      const response = await this.$http.get(`/mentor/mentor-detail/${this.$route.params.id}`)
      this.mentor = response.data
    } catch (error) {
      console.log(error.response)
    }
  }
}
</script>
<style scoped>
.bg-services {
  background-color: #fafafa;
}

.profile-card {
  margin-bottom: 15px;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
}

.profile-bar {
  text-align: center;
}

.profile-back {
  background-color: rgba(112, 87, 204, 0.85);
  height: 150px;
  margin-bottom: -75px;
  border-radius: 20px 20px 0 0;
}

.profile-pic {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.profile-block {
  margin-bottom: 75px;
}

.profile-block ul {
  padding-left: 0px;
}

.profile-block li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 7px;
  margin-bottom: 7px;
}

.profile-block li:last-child {
  border-bottom: 0 none;
}

.profile-block ul {
  padding-left: 0px;
}

.profile-block li {
  list-style: none;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 7px;
  margin-bottom: 7px;
}

.profile-block li:last-child {
  border-bottom: 0 none;
}

.profile-right {
  text-align: right;
  float: right;
}

.profile-right-side {
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
}

.rounded-circle {
  border-radius: 50%;
}
</style>
