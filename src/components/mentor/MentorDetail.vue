<template>
  <div class="bg-services">
    <div class="container py-4 py-xl-5">
      <div class="row mb-5">
        <div class="col-md-5">
          <div class="profile-card shadow">
            <div class="profile-bar">
              <div class="profile-back"></div>
              <img class="rounded-circle profile-pic" src="@/assets/img/mentor-1.jpg">
            </div>
            <div class="profile-block mx-auto px-md-3">
              <h3>Lucia Emma</h3>
              <ul>
                <li><span>Occupation Title:</span><span class="profile-right">Softwarte Enginneer</span> </li>
                <li><span>Company Name:</span><span class="profile-right">ByteDance</span> </li>
                <li><span>Location:</span><span class="profile-right">London</span> </li>
                <li><span>Email:</span><span class="profile-right">im.lucia@bytedance</span></li>
                <li><span>Year of experiences:</span><span class="profile-right">8 years</span> </li>
                <li><span>Office Hour:</span><span class="profile-right">None</span></li>
                <li><span>Linkedin:</span><span class="profile-right">None</span> </li>
              </ul>
              <a class="btn btn-outline-primary" role="button" href="#">Book an experience</a>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="profile-right-side px-md-3 py-md-3 shadow">
            <h3>About Me</h3>
            <div>
              <p>Nam convallis sollicitudin convallis. In sed nisl in neque maximus interdum. Sed ultrices vulputate
                eros at fermentum. Vestibulum consequat commodo erat, id mollis nisi auctor eget. Phasellus viverra nibh
                vel augue pretium, sed pharetra felis suscipit. Integer rutrum urna eleifend orci blandit viverra.
                Aenean a fermentum felis.</p>
              <h3>Experience</h3>
              <p>Vivamus id eros rhoncus, finibus mauris at, euismod metus. Duis tincidunt eget arcu ac molestie.
                Vestibulum non porta tellus, quis sollicitudin turpis. Praesent ut luctus augue. </p>
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
  created () {
  },
  methods: {

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
