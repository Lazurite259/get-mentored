<template>
  <div>
    <div class="bg-primary-demo">
      <!-- Start: Hero Clean Reverse -->
      <div class="container py-4 py-xl-5">
        <div class="row gy-4 gy-md-0">
          <div
            class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style="max-width: 650px">
              <h2 class="text-uppercase fw-bold font-color" style="font-family: Poppins, sans-serif; font-size: 46px">
                <i>Start your career journey</i>
              </h2>
              <p class="my-3" style="color: rgb(255, 255, 255)">
                Let’s get started with the support and guidance from Mentors              
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pb-5 mb-5">
              <img class="rounded img-fluid w-100 fit-cover" style="min-height: 300px"
                src="@/assets/img/mentorship-program-at-work.jpeg" />
            </div>
          </div>
        </div>
      </div>
      <!-- End: Hero Clean Reverse -->
    </div>
    <div class="bg-primary-gradient" style="height: 500px">
      <div class="container">
        <div class="row">
          <div class="col-md-auto">
            <div class="card-body py-lg-5 card-frame">
              <div>
                <h2 class="font-color"
                  style="margin-bottom: 60px;color: var(--bs-white);font-family: Poppins, sans-serif;">
                  Begin your Career Journey with GetMentored
                </h2>
                <router-link to="/mentee-register" tag="button" class="btn btn-outline-primary btn-lg"
                  style="border-radius: 20px">Be Mentored</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="card-body py-lg-5 card-frame">
              <div>
                <h2 class="font-color" style="
                      margin-bottom: 60px;
                      color: var(--bs-white);
                      font-family: Poppins, sans-serif;
                    ">
                  Support a new generation in developing career skills
                </h2>
                <router-link to="/mentor-register" tag="button" class="btn btn-outline-primary btn-lg"
                  style="border-radius: 20px">
                  Be a Mentor
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start: Hero2 -->
    <div class="bg-services">
      <!-- Start: Features Image -->
      <div class="container py-4 py-xl-5 bg-services">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <p style="color: #a5a5a5">OUR SERVICES</p>
            <h2 style="font-size: 34px">
              Embark on your career journey<br /><strong><span
                  style="color: rgb(33, 33, 33)">GetMentored</span></strong>
              is with you always along your path
            </h2>
            <img class="rounded fit-cover img-fluid w-100" src="@/assets/img/Graphic.png" />
          </div>
          <div class="col">
            <div class="row">
              <div class="col-md-8 offset-md-2 my-3">
                <div class="card mx-sm-3" style="border-radius: 35px">
                  <div class="card-body px-4 py-5 px-md-5">
                    <div>
                      <h4 class="fw-bold">Connect</h4>
                      <p class="text-muted">
                        <span style="color: rgb(34, 34, 34)">Connect with mentors and training tools along the
                          way.&nbsp;From profile strategies, résumés and a
                          continuing development of you GetMentored is always
                          here to support your vision.</span>
                      </p>
                      <router-link to="/mentors" tag="button" class="btn btn-primary" style="border-radius: 20px;">Learn
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-md-2 my-3">
                <div class="card mx-sm-3" style="border-radius: 35px">
                  <div class="card-body px-4 py-5 px-md-5">
                    <div>
                      <h4 class="fw-bold">Career Search</h4>
                      <p class="text-muted">
                        <span style="color: rgb(34, 34, 34)">From building a profile to building the experience
                          needed through volunteering and additional training
                          GetMentored has tools and resources for your career
                          journey.&nbsp;We understand that you grow,
                          reconsider, and career plans pivot.&nbsp;&nbsp;</span>
                      </p>
                      <router-link to="/career" tag="button" class="btn btn-primary" style="border-radius: 20px;">Learn
                        More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-md-2 my-3">
                <div class="card mx-sm-3" style="border-radius: 35px">
                  <div class="card-body px-4 py-5 px-md-5">
                    <div>
                      <h4 class="fw-bold">Connect With Peers</h4>
                      <p class="text-muted">
                        <span style="color: rgb(34, 34, 34)">Along with the personalized Mentoring, GetMentored
                          has a peer to peer social group where Mentorees can
                          connect with peers.</span>
                      </p>
                      <!-- <button class="btn btn-primary" type="button" style="border-radius: 20px;">
                        Learn more
                      </button> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Features Image -->
    </div>
    <!-- End: Hero2 -->

    <!-- Start: Metors Cards -->
    <div class="container py-4 py-xl-5">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2 style="font-size: 34px">Meet your favorite Mentors</h2>
          <p class="w-lg-50" style="font-size: 25px">
            <span style="color: rgb(51, 51, 51)">Experts join GetMentored from some of the world’s most trusted
              institutions</span>
          </p>
        </div>
      </div>
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-xl-3">
        <div class="col">
          <div class="card shadow mx-md-2">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px; object-fit: cover;"
              src="@/assets/img/mentor04.jpeg" />
            <div class="card-body p-4">
              <h4 class="card-title">John Smith</h4>
              <p style="color: #212121; font-weight: bold">Software Enginner</p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">BS in Information Technology. Help in
                  computers, networking, and programming.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="@/assets/img/mentor04.jpeg" />
                <div>
                  <p class="fw-bold mb-0">John Smith</p>
                  <p class="text-muted mb-0">ByteDance Inc</p>
                </div>
                <router-link class="btn btn-outline-dark btn-sm ms-auto" :to="{ name: 'mentors' }">
                  <i class="fa fa-plus"></i>&nbsp;More&nbsp;
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow mx-md-2">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px; object-fit: cover;"
              src="@/assets/img/mentor05.jpeg" />
            <div class="card-body p-4">
              <h4 class="card-title">Ryan Chen</h4>
              <p style="color: #212121; font-weight: bold">
                Mechanical Engineer
              </p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">16 years’ experience with domestic, foreign, and luxury cars
                  and heavy equipment.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="@/assets/img/mentor05.jpeg" />
                <div>
                  <p class="fw-bold mb-0">Ryan Chen</p>
                  <p class="text-muted mb-0">Think Magnificent</p>
                </div>
                <router-link class="btn btn-outline-dark btn-sm ms-auto" :to="{ name: 'mentors' }">
                  <i class="fa fa-plus"></i>&nbsp;More&nbsp;
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow mx-md-2">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px; object-fit: cover;"
              src="@/assets/img/mentor08.jpg" />
            <div class="card-body p-4">
              <h4 class="card-title">Jessica James</h4>
              <p style="color: #212121; font-weight: bold">Interior Designer</p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">Currently working in IKEA with 10 year's experience in the
                  design industry.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="@/assets/img/mentor08.jpg" />
                <div>
                  <p class="fw-bold mb-0">Jessica James</p>
                  <p class="text-muted mb-0">IKEA</p>
                </div>
                <router-link class="btn btn-outline-dark btn-sm ms-auto" :to="{ name: 'mentors' }">
                  <i class="fa fa-plus"></i>&nbsp;More&nbsp;
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- End: Mentors Cards -->

    <!-- Start: Mentees Card -->
    <div class="container py-4 py-xl-5">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>What Mentees are saying</h2>
        </div>
      </div>
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <p class="text-center">
              This website helps me find which field I am interested in. Really Professional!!!
            </p>
            <div class="d-flex">
              <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                src="@/assets/img/th-12.jpg" />
              <div>
                <p class="fw-bold text-primary mb-0">Jimmy Lee</p>
                <p class="text-muted mb-0">Data Science Mentee</p>
              </div>
            </div>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <p class="text-center">
              Best Mentor website I've ever seen. John Smith taught me how to prepare for my interview and shared his own experience
              in his software career.
                 
            </p>
            <div class="d-flex">
              <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                src="@/assets/img/th-07.jpg" />
              <div>
                <p class="fw-bold text-primary mb-0">Cheryl</p>
                <p class="text-muted mb-0">Software Enginner Mentee</p>
              </div>
            </div>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <p class="text-center">
              There are more than 1000 industries we can get in touch with. That was insane!
            </p>
            <div class="d-flex">
              <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                src="@/assets/img/th-06.jpg" />
              <div>
                <p class="fw-bold text-primary mb-0">Vinnie</p>
                <p class="text-muted mb-0">Web Programming Mentee</p>
              </div>
            </div>
            <div class="card border-0 shadow-none">
              <div class="card-body d-flex align-items-center p-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Mentees Cards -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.bg-primary-demo {
  background-color: rgb(112, 87, 204);
}

.font-color {
  background: linear-gradient(248.66deg, #fff973 0%, #62ffe3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-outline-primary {
  --bs-btn-color: #fde69a;
  --bs-btn-border-color: #fde69a;
  --bs-btn-hover-color: #1e266d;
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

.card-frame {
  width: 315px;
  padding-right: 33px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding-left: 33px;
}

.btn.btn-outline-dark.btn-sm {
  display: flex;
  align-items: center;
}

.bg-services {
  background-color: #fafafa;
}

.btn-primary {
  --bs-btn-color: #1e266d;
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
</style>
