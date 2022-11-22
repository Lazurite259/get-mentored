<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="text-start">
          <h1 class="mt-2">{{ career.OnetTitle }}</h1>
          <hr style="margin-top: 0px" />
          Also known as:
          <span v-for="(alterTitle, index) in career.AlternateTitles" :key="index" style="font-size: 15px">
            <b>{{ alterTitle }}</b> |
          </span>
        </div>
        <div class="mb-4">
          <iframe :src="videoURL" width="560" height="315" frameborder="0" scrolling="no" allowfullscreen />
        </div>
        <div class="text-start">
          <h3 class="mt-2">Description</h3>
          <hr style="margin-top: 0px; margin-bottom: 5px" />
          <p style="font-size: 15px">{{ career.OnetDescription }}</p>
        </div>
        <div class="col mt-4">
          <h2 style="margin-bottom: 5px">Mentors</h2>
          <hr style="margin-top: 0px" />
          <div class="col mt-4">
            <table class="table table-striped table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Company</th>
                  <th>Experiences</th>
                  <th>Connect</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mentor in mentorList" :key="mentor._id">
                  <td>{{ mentor.first_name }} {{ mentor.last_name }}</td>
                  <td>{{ mentor.location }}</td>
                  <td>{{ mentor.company_name }}</td>
                  <td>{{ mentor.year_of_experience }}</td>
                  <td>
                    <router-link :to="{ name: 'mentor-detail', params: { id: mentor._id } }">See Profile</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
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
        </div>
      </div>
      <div class="col-md-4">
        <div class="row mx-3 mt-4 py-2 bg-light" style="border-radius: 20px">
          <div class="col-3">
            <img src="@/assets/img/Avater 02.jpg" width="51" height="51" />
          </div>
          <div class="col-9" style="padding-left: 0px">
            <h6>CareerOneStop</h6>
            <p style="margin-bottom: 0px; font-size: 13px">CareerOneStop</p>
          </div>
        </div>
        <div class="row mx-3 mt-4">
          <h5 style="margin-bottom: 5px; color: var(--bs-gray-700)">Relative Careers</h5>
          <hr style="margin-top: 0px" />
          <ul style="list-style: none;">
            <li v-for="relatedCareer in relatedCareersLoaded" :key="relatedCareer[0]">
              <router-link :to="{ name: 'career-detail', params: { id: relatedCareer[0] } }" style="font-size: 15px">
                {{ relatedCareer[1] }}
              </router-link>
            </li>
          </ul>
          <a href="#" @click.prevent="showMoreRelatedCareers" v-if="!readMore['relatedCareer']"
            style="font-size: 13px; color: purple;">More relative careers</a>
          <a href="#" @click.prevent="showLessRelatedCareers" v-if="readMore['relatedCareer']"
            style="font-size: 13px; color: purple;">Less relative careers</a>
        </div>
        <div class="row mx-3 mt-4">
          <h5 style="margin-bottom: 5px; color: var(--bs-gray-700)">Skills</h5>
          <hr style="margin-top: 0px" />
          <ul style="list-style: none;">
            <li v-for="skill in skillsLoaded" :key="skill.ElementId" style="font-size: 15px">
              {{ skill.ElementName }}
            </li>
          </ul>
          <a href="#" @click.prevent="showMoreSkills" v-if="!readMore['skill']"
            style="font-size: 13px; color: purple;">More skills</a>
          <a href="#" @click.prevent="showLessSkills" v-if="readMore['skill']"
            style="font-size: 13px; color: purple;">Less skills</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const accessToken = 'ZNmEuvhcOoyed+qv1rqfxiJsWvwY5M7qKZH1QDjOuis37B8Gjr4xiIHA5sAtooJoM8tXz/GWwtHVrxLeOF77YA=='
export default {
  data () {
    return {
      career: {},
      videoURL: '',
      skills: [],
      skillLength: 5,
      relatedCareers: [],
      relatedCareerLength: 5,
      readMore: {},
      mentors: [],
      page: 0,
      perPage: 5
    }
  },
  created () {
    this.getCareerDetail()
  },
  computed: {
    skillsLoaded () {
      return this.skills.slice(0, this.skillLength)
    },
    relatedCareersLoaded () {
      return this.relatedCareers.slice(0, this.relatedCareerLength)
    },
    mentorList () {
      return this.paginate(this.mentors)
    },
    pageCount () {
      return Math.ceil(this.mentors.length / this.perPage)
    }
  },
  methods: {
    async getCareerDetail () {
      const apiURL = `https://api.careeronestop.org/v1/occupation/BzzipEBsuhnjkHU/${this.$route.params.id}/0?training=true&interest=true&videos=true&tasks=true&dwas=true&wages=true&alternateOnetTitles=true&projectedEmployment=true&ooh=true&stateLMILinks=true&relatedOnetTitles=true&skills=true&knowledge=true&ability=true&trainingPrograms=true`
      await axios.get(apiURL, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then((res) => {
        this.career = res.data.OccupationDetail[0]
        this.videoURL = `https://www.careeronestop.org/videos/careeronestop-videos-content.aspx?videocode=${this.career.OnetCode.replace(/\D/g, '')}`
        console.log(this.career)
        this.relatedCareers = Object.entries(this.career.RelatedOnetTitles || {})
        if (this.career.SkillsDataList) {
          this.skills = this.career.SkillsDataList.filter(skill => {
            return parseInt(skill.Importance) > 50
          })
        }
        this.getMentors(this.career.OnetCode)
      })
    },
    async getMentors (career) {
      this.initiatePage()
      try {
        const response = await this.$http.get(`/mentor/${career}`)
        this.mentors = response.data
      } catch (error) {
        console.log(error.response)
      }
    },
    showMoreSkills () {
      this.skillLength = this.skills.length
      this.$set(this.readMore, 'skill', true)
    },
    showLessSkills () {
      this.skillLength = 5
      this.$set(this.readMore, 'skill', false)
    },
    showMoreRelatedCareers () {
      this.relatedCareerLength = this.relatedCareers.length
      this.$set(this.readMore, 'relatedCareer', true)
    },
    showLessRelatedCareers () {
      this.relatedCareerLength = 5
      this.$set(this.readMore, 'relatedCareer', false)
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
  },
  watch: { $route (to, from) { if (to !== from) { location.reload() } } }
}
</script>
<style scoped>
button.page-link {
  display: inline-block;
  color: #000;
}
</style>
