<template>
  <section class="py-5">
    <!-- Start: Cards container -->
    <div class="container">
      <!-- Start: Title -->
      <h1 class="text-center mb-4">Meet with Mentors</h1>
      <p class="text-muted text-center">
        GetMentored offers tons of abundant resources to help you find the right mentor for you
      </p>
      <!-- End: Title -->
      <!-- Start: filter controls -->
      <div class="filtr-controls text-center lead mb-3">
        <span class="active d-inline-block mx-3 py-1 position-relative" data-filter="all" type="button">All </span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="1">Computer Science</span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="2">Mechanics</span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="3">Designer</span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="4">Psychologist</span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="5">Doctor</span>
        <span class="d-inline-block mx-3 py-1 position-relative" data-filter="6">Lawyer</span>
      </div>
      <!-- End: filter controls -->
      <!-- Start: Cards -->
      <div class="row filtr-container">
        <!-- Start: Card column -->
        <div class="col-md-6 col-lg-4 filtr-item" v-for="(mentor, index) in displayList" :key="index">
          <div class="card shadow">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px"
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
            <div class="card-body p-4">
              <h4 class="card-title">{{ mentor.first_name }} {{ mentor.last_name }}</h4>
              <p style="color: #212121; font-weight: bold">
                {{ mentor.occupation_title }}
              </p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">{{ getIntro(mentor) }}</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div>
                  <p class="fw-bold mb-0">{{ mentor.first_name }} {{ mentor.last_name }}</p>
                  <p class="text-muted mb-0">{{ mentor.company_name }}</p>
                </div>
                <router-link class="btn btn-outline-dark btn-sm ms-auto"
                  :to="{ name: 'mentor-detail', params: { id: mentor._id } }">
                  <i class="fa fa-plus"></i>&nbsp;Connect&nbsp;
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- End: Card column -->
        <div class="filtr-item">
          <nav aria-label="page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <button type="button" class="page-link" v-if="page > 0" @click="page--">Previous</button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" v-for="pageNumber in setPages()" :key="pageNumber"
                  :class="{ active: pageNumber - 1 === page }" @click="page = pageNumber - 1">
                  {{ pageNumber }}</button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" @click="page++" v-if="page < pageCount - 1">Next</button>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Start: Card column -->
        <!-- <div class="col-md-6 col-lg-4 filtr-item" data-category="1">
          <div class="card shadow">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px" src="@/assets/img/th-02.jpg" />
            <div class="card-body p-4">
              <h4 class="card-title">Jessica Jams</h4>
              <p style="color: #212121; font-weight: bold">
                Software Enginner
              </p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">Bachelor’s degree in Information Technology. Help in
                  computers, networking, and programming.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div>
                  <p class="fw-bold mb-0">Jessica Jams</p>
                  <p class="text-muted mb-0">ByteDance Inc</p>
                </div>
                <button class="btn btn-outline-dark btn-sm ms-auto" type="button">
                  <i class="fa fa-plus"></i>&nbsp;Connect
                </button>
              </div>
            </div>
          </div>
        </div> -->
        <!-- End: Card column -->
        <!-- Start: Card column -->
        <!-- <div class="col-md-6 col-lg-4 filtr-item" data-category="2">
          <div class="card shadow">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px" src="@/assets/img/th-03.jpg" />
            <div class="card-body p-4">
              <h4 class="card-title">Ryan Chen</h4>
              <p style="color: #212121; font-weight: bold">
                Mechanical Engineer
              </p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">16 years’ experience with domestic, foreign, and luxury
                  cars and heavy equipment.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div>
                  <p class="fw-bold mb-0">Ryan Chen</p>
                  <p class="text-muted mb-0">Erat netus</p>
                </div>
                <button class="btn btn-outline-dark btn-sm ms-auto" type="button">
                  <i class="fa fa-plus"></i>&nbsp;Connect
                </button>
              </div>
            </div>
          </div>
        </div> -->
        <!-- End: Card column -->
        <!-- Start: Card column -->
        <!-- <div class="col-md-6 col-lg-4 filtr-item" data-category="3">
          <div class="card shadow">
            <img class="card-img-top w-100 d-block fit-cover" style="height: 200px" src="@/assets/img/th-06.jpg" />
            <div class="card-body p-4">
              <h4 class="card-title">John Smith</h4>
              <p style="color: #212121; font-weight: bold">
                Interior Designer
              </p>
              <p class="card-text">
                <span style="color: rgb(51, 51, 51)">Currently working in IKEA with 10 year's experience in the
                  design industry.</span><br />
              </p>
              <div class="d-flex">
                <img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                  src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div>
                  <p class="fw-bold mb-0">John Smith</p>
                  <p class="text-muted mb-0">Erat netus</p>
                </div>
                <button class="btn btn-outline-dark btn-sm ms-auto" type="button">
                  <i class="fa fa-plus"></i>&nbsp;Connect
                </button>
              </div>
            </div>
          </div>
        </div> -->
        <!-- End: Card column -->
      </div>
      <!-- End: Cards -->
    </div>
    <!-- End: Cards container -->
  </section>
</template>
<script>
export default {
  data () {
    return {
      mentors: [],
      page: 0,
      perPage: 12
    }
  },
  async created () {
    try {
      const response = await this.$http.get('/mentor')
      this.mentors = response.data
      this.initiatePage()
    } catch (error) {
      console.log(error.response)
    }
  },
  computed: {
    // filteredList () {
    //   this.initiatePage()
    //   return this.mentors.filter(mentor => {
    //     return mentor.occupation_title.toLowerCase().includes()
    //   })
    // },
    displayList () {
      return this.paginate(this.mentors)
    },
    pageCount () {
      return Math.ceil(this.mentors.length / this.perPage)
    }
  },
  methods: {
    getIntro (mentor) {
      console.log(mentor)
      if (mentor.introduction === undefined) {
        return ''
      }
      if (mentor.introduction.length > 100) {
        return mentor.introduction.slice(0, 100) + '...'
      }
      return mentor.introduction
    },
    initiatePage () {
      this.page = 0
    },
    paginate (mentors) {
      const start = this.page * this.perPage
      const end = start + this.perPage
      return mentors.slice(start, end)
    },
    setPages () {
      const pages = []
      if (this.page < 2) {
        for (let i = 1; i < 6; i++) {
          const page = 0 + i
          if (page <= this.pageCount) {
            pages.push(page)
          }
        }
      } else if (this.page > this.pageCount - 3) {
        for (let i = -1; i < 4; i++) {
          const page = this.pageCount - 3 + i
          if (page <= this.pageCount && page > 0) {
            pages.push(page)
          }
        }
      } else {
        for (let i = -1; i < 4; i++) {
          const page = this.page + i
          if (page <= this.pageCount) {
            pages.push(page)
          }
        }
      }
      return pages
    }
  }
}

</script>
<style scoped>
.card {
  background-color: #ffffff;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.btn.btn-outline-dark.btn-sm {
  display: flex;
  align-items: center;
}

.filtr-item {
  padding-top: 30px;
}

.filtr-controls span {
  cursor: pointer;
}

.filtr-controls span:after {
  content: ' ';
  width: 0;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 50%;
  background: transparent;
  -webkit-transition: all .6s ease;
  transition: all .6s ease;
}

.filtr-controls span.active:after {
  width: 100%;
  left: 0;
  background: #000;
}

.filtr-loading {
  border: 5px solid #333;
  position: relative;
  border-radius: 40px;
  height: 40px;
  left: 50%;
  margin: 80px 0;
  opacity: 0;
  top: 0;
  width: 40px;
  z-index: 2;
  -webkit-animation: pulsate 1s ease-out infinite;
  animation: pulsate 1s ease-out infinite;
}

@keyframes pulsate {}

button.page-link {
  display: inline-block;
  color: #000;
}
</style>
