<template>
  <div class="row justify-content-center">
    <section class="newsletter-subscribe py-4 py-xl-5">
      <div class="container">
        <div class="row mb-2">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h1>
              Search Careers
            </h1>
            <p class="text-muted">
              GetMentored offers tons of abundant
              career resources&nbsp;to help you better understand the details of
              occupations
            </p>
          </div>
        </div>
        <form class="d-flex justify-content-center flex-wrap" onkeydown="return event.key != 'Enter';">
          <div class="mb-3">
            <input class="form-control" type="text" v-model="searchKey" name="" placeholder="Keyword" />
          </div>
        </form>
      </div>
    </section>
    <div class="col-md-8">
      <table class="table table-striped table-hover">
        <thead foclass="thead-dark">
          <tr class="row">
            <th class="col-md-7">Occupation Title</th>
            <th class="col-md-5">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row" v-for="career in displayList" :key="career.onet_code">
            <td class="col-md-7">
              <router-link class="text-link" :to="{ name: 'career-detail', params: { id: career.onet_code } }">
                {{ career.occupation_title }}
              </router-link>
            </td>
            <td class="col-md-5">
              <span v-for="(category, index) in career.career_cluster" :key="index">{{ category }}<br></span>
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
</template>
<script>
export default {
  data () {
    return {
      searchKey: '',
      careers: [],
      page: 0,
      perPage: 20
    }
  },
  async created () {
    try {
      const response = await this.$http.get('/career')
      this.careers = response.data
    } catch (error) {
      console.log(error.response)
    }
  },
  computed: {
    filteredList () {
      this.initiatePage()
      return this.careers.filter(career => {
        return career.occupation_title.toLowerCase().includes(this.searchKey.toLowerCase())
      })
    },
    displayList () {
      return this.paginate(this.filteredList)
    },
    pageCount () {
      return Math.ceil(this.filteredList.length / this.perPage)
    }
  },
  methods: {
    initiatePage () {
      this.page = 0
    },
    paginate (careers) {
      const start = this.page * this.perPage
      const end = start + this.perPage
      return careers.slice(start, end)
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
.text-link {
  text-decoration: none;
}

button.page-link {
  display: inline-block;
  color: #000;
}

.page-link.active {
  color: #fff;
}
</style>
