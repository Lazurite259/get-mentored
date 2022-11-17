<template>
  <!-- <div class="row justify-content-center"> -->
    <!-- <h1 class="text-center">Get Mentored</h1>
    <div class="text-center">
      <router-link to="/mentee-register" tag="button" class="btn btn-outline-primary">Become a Mentee</router-link>
      <router-link to="/mentor-register" tag="button" class="btn btn-outline-primary">Become a Mentor</router-link>
    </div> -->
    <div style="background: #7057cc">
      <!-- Start: Hero Clean Reverse -->
      <div class="container py-4 py-xl-5">
        <div class="row gy-4 gy-md-0">
          <div
            class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center"
          >
            <div style="max-width: 650px">
              <h2
                class="text-uppercase fw-bold font-color"
                style="font-family: Poppins, sans-serif; font-size: 46px"
              >
                Your career is a lifetime journey
              </h2>
              <p class="my-3" style="color: rgb(255, 255, 255)">
                Let’s get started with the support and guidance from Mentors who
                have accomplished their goal
              </p>
              <a class="btn btn-outline-primary btn-lg" role="button" href="#"
                >See Our Works</a
              >
            </div>
          </div>
          <div class="col-md-6">
            <div class="pb-5 mb-5">
              <img
                class="rounded img-fluid w-100 fit-cover"
                style="min-height: 300px"
                src="assets/img/mentorship-program-at-work.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- End: Hero Clean Reverse -->
    </div>
</template>

<script>
import router from '@/router';

export default {
  name: "HomePage",
  components: { router }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  background-color: rgba(112,87,204,1);
}

.bg-primary-demo {
  background-color: rgb(112,87,204);
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
  --bs-btn-focus-shadow-rgb: 13,110,253;
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
  --bs-btn-focus-shadow-rgb: 49,132,253;
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


/* h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn {
  margin: 15px;
} */
</style>
