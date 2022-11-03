<template>
  <div>
    <!-- Nav bar -->
    <!-- <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/">GetMentored</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/career">Career Resources</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mentor-register">Sign Up As Mentor</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mentee-register">Sign Up As Mentee</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mentor_profile">Mentor Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mentee_profile">Mentee Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Test</router-link>
          </li>
        </ul>
      </div>
    </nav> -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand float-left" to="/">GetMentored</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/career">Career Resources</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSignUp" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Sign Up
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownSignUp">
                <li><a class="dropdown-item" href="mentor-register">As Mentor</a></li>
                <li><a class="dropdown-item" href="mentee-register">As Mentee</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLogin" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownLogin">
                <li><a class="dropdown-item" href="mentor-login">As Mentor</a></li>
                <li><a class="dropdown-item" href="mentee-login">As Mentee</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  background-color: #4B0082;
}

/* .navbar-nav .nav-link {
  color: #fff;
} */
.navbar .navbar-nav .nav-item .nav-link {
  color: #fff;
}

.navbar .navbar-brand {
  color: #fff;
}
</style>
